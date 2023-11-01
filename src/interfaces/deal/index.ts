import { GetQueryInterface } from 'interfaces';

export interface DealInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DealGetQueryInterface extends GetQueryInterface {
  id?: string;
}
