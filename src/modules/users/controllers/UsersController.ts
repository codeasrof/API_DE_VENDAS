import { Request, Response } from "express";
import ListUserService from "../services/ListUserService";
import CreateUserService from "../services/CreateUserService";

export default class UsersController{

  public async index(request:Request, response: Response) : Promise<Response>{
    const listUser = new ListUserService()

    const users = listUser.execute()
    console.log(request.user.id)
    return response.json(users)
  }

  public async create(request: Request, response:Response) : Promise<Response>{
    const {name, email, password} = request.body;

    const createProduct = new CreateUserService()

    const product = await createProduct.execute({
      name,
      email,
      password
    })
    return response.json(product)
  }
}
