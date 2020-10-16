import * as Yup from 'yup';
import { VALIDATION_MESSAGES } from '../../../constants';

export type RegisterFormType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required(VALIDATION_MESSAGES.required),
  lastName: Yup.string().required(VALIDATION_MESSAGES.required),
  email: Yup.string()
    .email(VALIDATION_MESSAGES.email)
    .required(VALIDATION_MESSAGES.required),
  password: Yup.string()
    .required(VALIDATION_MESSAGES.required)
    .min(6, VALIDATION_MESSAGES.min),
});
