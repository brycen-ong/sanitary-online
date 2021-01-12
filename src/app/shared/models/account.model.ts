export class AccountModel{
  address?: {
    barangay?: string;
    city?: string;
    otherInfo?: string;
    province?: string;
    street?: string;
  };
  birthDate?: {
    nanoseconds?: number;
    seconds?: number;
  };
  email?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: number;
  uid?: string;
}