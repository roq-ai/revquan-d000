import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  industry_type: yup.string().nullable(),
  company_size: yup.number().integer().nullable(),
  annual_revenue: yup.number().nullable(),
  company_location: yup.string().nullable(),
  name: yup.string().required(),
});
