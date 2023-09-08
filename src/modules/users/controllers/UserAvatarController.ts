import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController{

  public async update(request: Request, response:Response) : Promise<Response>{

    const updateAvatar = new UpdateUserAvatarService()
    const fileExists = request.file?.filename;

    const user = updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename:fileExists,
    })
    return response.json(user)

  }
}
