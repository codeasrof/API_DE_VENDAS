import Product from "@modules/products/typeorm/entities/Product";
import User from "@modules/users/typeorm/entities/User";
import { createConnection } from "typeorm";

createConnection({
  type:"postgres",
  host:"localhost",
  port: 5432,
  username: "postgres",
  password:"docker",
  entities:[
    Product,
    User
  ],
  synchronize:true
})
