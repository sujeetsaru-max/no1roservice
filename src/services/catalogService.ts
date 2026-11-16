import { api } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { ServiceDetail, AMCPlan } from "@/types/service";

export const catalogService = {
  /**
   * Get list of all RO water purifier services
   */
  async getServices() {
    return api.get<ServiceDetail[]>(API_ENDPOINTS.services.list);
  },

  /**
   * Get single service detail by slug
   */
  async getServiceBySlug(slug: string) {
    return api.get<ServiceDetail>(API_ENDPOINTS.services.detail(slug));
  },

  /**
   * Get all RO Annual Maintenance Contract (AMC) plans
   */
  async getAMCPlans() {
    return api.get<AMCPlan[]>(API_ENDPOINTS.amc.plans);
  },
};
