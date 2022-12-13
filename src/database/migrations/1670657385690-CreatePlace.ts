import BaseMigration from "@common/base/base.migration";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlace1670657385690 implements MigrationInterface {
  private static readonly migration = new BaseMigration();
  private static readonly table = new Table({
    name: 'place',
    columns: [
      {
        name: "name",
        type: "varchar(50)",
        isNullable: false
      },
      {
        name: "lat",
        type: "DOUBLE PRECISION", // NUMERIC(precision, scale) maybe?
        isNullable: false
      },{
        name: "lng",
        type: "DOUBLE PRECISION",
        isNullable: false
      },
      ...CreatePlace1670657385690.migration.all
    ]
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION cube');
    await queryRunner.query('CREATE EXTENSION earthdistance');

    await queryRunner.createTable(CreatePlace1670657385690.table);

    await queryRunner.query('CREATE INDEX place_name_low_index ON place USING btree(lower((name)::text))');
    await queryRunner.query('CREATE INDEX place_index ON place USING gist (ll_to_earth(lat, lng))');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION cube CASCADE');
    await queryRunner.dropTable(CreatePlace1670657385690.table);
  }

}
