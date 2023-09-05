import { Router } from "express"
import { celebrate, Joi, Segments } from "celebrate"
import UsersController from "../controllers/UsersController"
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated"
import multer from "multer"
import UserAvatarController from "../controllers/UserAvatarController"
import upload from "@config/upload"

const usersRouter = Router()
const usersController = new UsersController()
const usersAvatarController = new UserAvatarController()
const uploadMulter = multer(upload)

usersRouter.get(
  "/",
  isAuthenticated,
  usersController.index
)

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]:{
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
  usersController.create,
)

usersRouter.patch(
  "/avatar",
  isAuthenticated,
  uploadMulter.single('avatar'),
  usersAvatarController.update
)
export default usersRouter
