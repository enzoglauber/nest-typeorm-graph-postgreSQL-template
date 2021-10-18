import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

class BaseMigration {
  get uuid(): TableColumnOptions {
    return this.id({})
  }

  get createdAt(): TableColumnOptions {
    return this.date({ name: "createdAt" })
  }

  get updatedAt(): TableColumnOptions {
    return this.date({ name: "updatedAt" })
  }

  get active(): TableColumnOptions {
    return this.bool({name: 'active'})
  }

  get archived(): TableColumnOptions {
    return this.bool({name: 'archived'})
  }

  get all(): TableColumnOptions[] {
    return [
      this.uuid,
      this.archived,
      this.active,
      this.createdAt,
      this.updatedAt,
    ]
  }

  id(params: Partial<TableColumnOptions>): TableColumnOptions {
    return {
      name: "id",
      type: "uuid",
      isPrimary: true,
      generationStrategy: "uuid",
      default: "uuid_generate_v4()",
      ...params
    }
  }

  date(params: Partial<TableColumnOptions>): TableColumnOptions {
    return {
      name: "date",
      type: "timestamptz",
      ...params
    }
  }

  bool(params: Partial<TableColumnOptions>): TableColumnOptions {
    return {
      name: "bol",
      type: "boolean",
      ...params
    }
  }

  // public static getVarCharColumn({ name, length = '255', isPrimary = false, isNullable = false, isUnique = false, defaultValue = null }): TableColumnOptions {
  //   return {
  //     name,
  //     length,
  //     isPrimary,
  //     isNullable,
  //     isUnique,
  //     default: `'${defaultValue}'`,
  //     type: 'varchar',
  //   };
  // }
}

export default BaseMigration;
