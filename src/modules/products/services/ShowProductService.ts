import { getCustomRepository } from "typeorm"
import { ProductResposity } from "../typeorm/repositories/ProductsRepository"

import Product from "../typeorm/Product"
import AppError from "@shared/errors/AppError"

interface IRequest{
  id: string
}

class ShowProductService {

  public async execute({id} : IRequest): Promise<Product> {

    const productsRepository = getCustomRepository(ProductResposity)

    const products = await productsRepository.findOne(id);
    if(!products){
      throw new AppError("Product not found")
    }
    return products

  }

}

export default ShowProductService
