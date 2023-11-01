import * as yup from 'yup';

export const pipelineValidationSchema = yup.object().shape({
  expected_close_date: yup.date().nullable(),
  progress_status: yup.string().nullable(),
});
