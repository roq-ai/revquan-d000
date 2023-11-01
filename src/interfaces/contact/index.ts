import { GetQueryInterface } from 'interfaces';

export interface ContactInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContactGetQueryInterface extends GetQueryInterface {
  id?: string;
}
