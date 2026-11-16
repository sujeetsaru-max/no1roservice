export interface CityCoverage {
  id: string;
  name: string;
  slug: string;
  state: string;
  isActive: boolean;
  serviceablePincodesCount: number;
  featuredAreas: string[];
}

export interface PincodeCheckResult {
  pincode: string;
  isServiceable: boolean;
  city?: string;
  state?: string;
  estimatedArrivalMins?: number;
  message: string;
}
