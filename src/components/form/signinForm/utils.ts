import * as Yup from 'yup';
import { VALIDATION_MESSAGES } from '../../../constants';

export type SigninFormType = {
  email: string;
  password: string;
};

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(VALIDATION_MESSAGES.email)
    .required(VALIDATION_MESSAGES.required),
  password: Yup.string()
    .required(VALIDATION_MESSAGES.required)
    .min(6, VALIDATION_MESSAGES.min),
});
