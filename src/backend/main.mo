import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  module CustomerInfo {
    public func compare(a : CustomerInfo, b : CustomerInfo) : Order.Order {
      return Text.compare(a.email, b.email);
    };
  };

  module CoffeeFrequency {
    public type Frequency = {
      #occasionally;
      #weekly;
      #biweekly;
      #daily;
      #multipleTimesDaily;
    };

    public func compare(a : Frequency, b : Frequency) : Order.Order {
      switch (a, b) {
        case (#occasionally, #occasionally) { #equal };
        case (#occasionally, _) { #less };
        case (#weekly, #occasionally) { #greater };
        case (#weekly, #weekly) { #equal };
        case (#weekly, _) { #less };
        case (#biweekly, #daily) { #less };
        case (#biweekly, #biweekly) { #equal };
        case (#biweekly, _) { #less };
        case (#daily, #daily) { #equal };
        case (#daily, #multipleTimesDaily) { #less };
        case (#multipleTimesDaily, #multipleTimesDaily) { #equal };
        case (#multipleTimesDaily, _) { #greater };
      };
    };
  };

  type CustomerInfo = {
    fullName : Text;
    email : Text;
    phoneNumber : Text;
    favoriteCoffee : Text;
    visitFrequency : CoffeeFrequency.Frequency;
    newsletterOptIn : Bool;
  };

  type NewsletterSubscriber = {
    email : Text;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let customers = Map.empty<Principal, CustomerInfo>();
  let newsletterSubscribers = Map.empty<Text, NewsletterSubscriber>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  public shared ({ caller }) func registerCustomer(customer : CustomerInfo) : async () {
    if (customers.containsKey(caller)) {
      Runtime.trap("Customer already registered");
    };

    customers.add(caller, customer);

    if (customer.newsletterOptIn) {
      if (not newsletterSubscribers.containsKey(customer.email)) {
        newsletterSubscribers.add(
          customer.email,
          { email = customer.email }
        );
      };
    };
  };

  public shared ({ caller }) func subscribeToNewsletter(email : Text) : async () {
    if (newsletterSubscribers.containsKey(email)) {
      Runtime.trap("Email already subscribed to the newsletter");
    };

    newsletterSubscribers.add(
      email,
      { email },
    );
  };

  public query ({ caller }) func getCustomers() : async [CustomerInfo] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all customer registrations");
    };

    customers.values().toArray();
  };

  public query ({ caller }) func getNewsletterSubscribers() : async [Text] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view newsletter subscribers");
    };

    newsletterSubscribers.values().toArray().map(func(sub) { sub.email });
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
