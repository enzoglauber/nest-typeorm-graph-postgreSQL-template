import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import BaseMigration from '@common/base/base.migration';

export class CreateAddress1635121321163 implements MigrationInterface {
  private static readonly migration = new BaseMigration();
  private static readonly table = new Table({
    name: 'address',
    columns: [
      {
        name: "street",
        type: "varchar(300)"
      },
      {
        name: "city",
        type: "varchar(100)"
      },
      {
        name: "country",
        type: "varchar(100)"
      },
      ...CreateAddress1635121321163.migration.all
    ],
    // foreignKeys: [
    //   {
    //     name: "providerUser",
    //     referencedTableName: "profiles",
    //     referencedColumnNames: ["id"],
    //     columnNames: ["profile_id"],
    //     onDelete: "CASCADE",
    //     onUpdate: "CASCADE"
    //   }
    // ]
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(CreateAddress1635121321163.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(CreateAddress1635121321163.table);
  }
}
