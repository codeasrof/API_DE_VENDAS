import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import ForgotPasswordController from '../controllers/ForgotPasswordController'
import ResetPasswordController from '../controllers/ResetPasswordController'

const passwordRouter = Router()
const forgotPasswordController = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password'))
    },
  }),
  resetPasswordController.create,
);

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirm: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  forgotPasswordController.create,
);

export default passwordRouter;
