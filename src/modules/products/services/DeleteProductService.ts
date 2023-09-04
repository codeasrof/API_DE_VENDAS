import AppError from "@shared/errors/AppError"
import { getCustomRepository } from "typeorm"
import { ProductResposity } from "../typeorm/repositories/ProductsRepository"


interface IRequest{
  id: string
}

class DeleteProductService {
  public async execute({id} : IRequest): Promise<void>{
    const productsRepository = getCustomRepository(ProductResposity)
    const product = await productsRepository.findOne(id)

    if(!product){
      throw new AppError("Product not found")
    }
    await productsRepository.remove(product)
  }
}

export default DeleteProductService
