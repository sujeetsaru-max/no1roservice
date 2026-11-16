import { api } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { BookingRecord, BookingRequest } from "@/types/booking";

export const bookingService = {
  /**
   * Submit a new doorstep RO service booking to the backend
   */
  async createBooking(data: BookingRequest) {
    return api.post<BookingRecord>(API_ENDPOINTS.bookings.create, data);
  },

  /**
   * Track service booking progress by tracking ID or phone number
   */
  async trackBooking(trackingNumber: string) {
    return api.get<BookingRecord>(API_ENDPOINTS.bookings.track(trackingNumber));
  },

  /**
   * Fetch available technician time slots for a given date
   */
  async getAvailableSlots(date: string, pincode?: string) {
    return api.get<string[]>(API_ENDPOINTS.bookings.slots, {
      params: { date, pincode },
    });
  },
};
