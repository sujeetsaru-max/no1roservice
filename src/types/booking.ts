export type BookingStatus =
  | "pending"
  | "confirmed"
  | "assigned"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface BookingCustomer {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  pincode: string;
  landmark?: string;
}

export interface BookingItem {
  serviceId: string;
  serviceName: string;
  brandName?: string;
  issueDescription?: string;
  preferredDate: string;
  preferredTimeSlot: string;
}

export interface BookingRequest extends BookingCustomer, BookingItem {}

export interface BookingRecord extends BookingRequest {
  id: string | number;
  trackingNumber: string;
  status: BookingStatus;
  technicianName?: string;
  technicianPhone?: string;
  estimatedCost?: number;
  finalCost?: number;
  createdAt: string;
  updatedAt: string;
}
