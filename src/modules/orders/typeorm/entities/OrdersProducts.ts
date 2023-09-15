
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Order from "./Order";
import Product from "@modules/products/typeorm/entities/Product";

@Entity("orders_product")

class OrdersProducts{
  @PrimaryGeneratedColumn("uuid")
  id:string


  @ManyToOne(() => Order, order => order.order_products)
  @JoinColumn({name: "order_id"})
  order: Order

  @ManyToOne(() => Product, product => product.order_products)
  @JoinColumn({name: "product_id"})
  product: Product

  @Column('int')
  price:number

  @Column('int')
  quantity:number

  @CreateDateColumn()
  created_at:Date

  @UpdateDateColumn()
  updated_at:Date
}

export default OrdersProducts
