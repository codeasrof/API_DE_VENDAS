import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddProductIdToOrdersProducts1694743570171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.addColumn(
        'orders',
        new TableColumn({
            name:"product_id",
            type:"uuid",
            isNullable: true,
          }),
      )

      await queryRunner.createForeignKey(
        "orders",
        new TableForeignKey({
          name: "OrdersProductsProduct",
          columnNames: ["product_id"],
          referencedTableName: "products",
          referencedColumnNames: ["id"],
          onDelete: "SET NULL"
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey("orders_products", "OrdersProductsProduct")
      await queryRunner.dropColumn("orders_products", "product_id")
    }

}
