import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
}
