import { getCustomRepository } from "typeorm"
import { ProductResposity } from "../typeorm/repositories/ProductsRepository"

import Product from "../typeorm/Product"

class ListProductService {

  public async execute(): Promise<Product[]>{

    const productsRepository = getCustomRepository(ProductResposity)
    const products = productsRepository.find();
    return products
  }

}

export default ListProductService
