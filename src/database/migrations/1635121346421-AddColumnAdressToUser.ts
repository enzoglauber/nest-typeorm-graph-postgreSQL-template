import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddColumnAdressToUser1635121346421 implements MigrationInterface {
  private static readonly column = new TableColumn({
    name: 'address_id',
    type: 'uuid',
    isNullable: true,
    isUnique: true,
  })

  private static readonly fk = new TableForeignKey({
    name: "fk_address",
    referencedTableName: "address",
    referencedColumnNames: ["id"],
    columnNames: ["address_id"],
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', AddColumnAdressToUser1635121346421.column);
    await queryRunner.createForeignKey('user', AddColumnAdressToUser1635121346421.fk)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', AddColumnAdressToUser1635121346421.column);
    await queryRunner.dropForeignKey('user', AddColumnAdressToUser1635121346421.fk)
  }
}
