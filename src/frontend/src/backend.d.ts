import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CustomerInfo {
    visitFrequency: Frequency;
    newsletterOptIn: boolean;
    fullName: string;
    email: string;
    favoriteCoffee: string;
    phoneNumber: string;
}
export interface UserProfile {
    name: string;
}
export enum Frequency {
    occasionally = "occasionally",
    daily = "daily",
    multipleTimesDaily = "multipleTimesDaily",
    biweekly = "biweekly",
    weekly = "weekly"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCustomers(): Promise<Array<CustomerInfo>>;
    getNewsletterSubscribers(): Promise<Array<string>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    registerCustomer(customer: CustomerInfo): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    subscribeToNewsletter(email: string): Promise<void>;
}
