import { GetQueryInterface } from 'interfaces';

export interface StageInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface StageGetQueryInterface extends GetQueryInterface {
  id?: string;
}
