import { api } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { CityCoverage, PincodeCheckResult } from "@/types/city";

export const cityService = {
  /**
   * Get all serviceable Indian cities
   */
  async getCities() {
    return api.get<CityCoverage[]>(API_ENDPOINTS.locations.cities);
  },

  /**
   * Instant doorstep pincode serviceability checker
   */
  async checkPincode(pincode: string) {
    return api.get<PincodeCheckResult>(API_ENDPOINTS.locations.checkPincode(pincode));
  },
};
