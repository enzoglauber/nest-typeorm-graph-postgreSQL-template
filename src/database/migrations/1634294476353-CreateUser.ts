import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1634294476353 implements MigrationInterface {

  private static readonly table = new Table({
    name: 'user',
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      },
      {
        name: "name",
        type: "varchar(200)"
      },
      {
        name: "email",
        type: "varchar(100)"
      },
      {
        name: "password",
        type: "varchar(300)"
      },
      {
        name: "createdAt",
        type: "timestamptz"
      },
      {
        name: "updatedAt",
        type: "timestamptz"
      }
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
    await queryRunner.createTable(CreateUser1634294476353.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(CreateUser1634294476353.table);
  }

}
