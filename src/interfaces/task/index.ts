import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
}
