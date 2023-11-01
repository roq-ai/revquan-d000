import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  industry_type?: string;
  company_size?: number;
  annual_revenue?: number;
  company_location?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;

  _count?: {};
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  industry_type?: string;
  company_location?: string;
  name?: string;
  tenant_id?: string;
}
