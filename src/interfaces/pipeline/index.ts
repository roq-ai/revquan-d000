import { GetQueryInterface } from 'interfaces';

export interface PipelineInterface {
  id?: string;
  expected_close_date?: any;
  progress_status?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PipelineGetQueryInterface extends GetQueryInterface {
  id?: string;
  progress_status?: string;
}
