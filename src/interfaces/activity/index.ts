import { GetQueryInterface } from 'interfaces';

export interface ActivityInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
}
