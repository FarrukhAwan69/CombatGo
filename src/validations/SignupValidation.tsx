import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required('First name is required'),

  lastName: Yup.string()
    .trim()
    .required('Last name is required'),

  email: Yup.string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, "Password must be at least 8 characters long")
});