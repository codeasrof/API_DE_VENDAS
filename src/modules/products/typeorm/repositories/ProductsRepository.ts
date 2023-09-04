import { EntityRepository, Repository } from "typeorm";
import Product from "../Product";

@EntityRepository(Product)
export class ProductResposity extends Repository<Product>{
  public async findByName(name:string): Promise<Product | undefined>{
    const product = this.findOne({
      where:{
        name,
      }
    });
    return product
  }
}
