import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateDatabaseBuymore1588816137115 implements MigrationInterface {
  private brandTable = new Table({
    name: 'brand',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  private productCategoryTable = new Table({
    name: 'product_category',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  private productTable = new Table({
    name: 'product',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50',
        isNullable: false,
      },
      {
        name: 'description',
        type: 'varchar',
        length: '100',
        isNullable: false,
      },
      {
        name: 'color',
        type: 'varchar',
        length: '10',
        isNullable: true,
      },
      {
        name: 'evaluation',
        type: 'double',
        isNullable: true,
      },
      {
        name: 'value',
        type: 'decimal',
        isNullable: false,
      },
      {
        name: 'brand_id',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'product_category_id',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  private userTable = new Table({
    name: 'user',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '30',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  private brandFK = new TableForeignKey({
    columnNames: ['brand_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'brand',
  });

  private categoryFK = new TableForeignKey({
    columnNames: ['product_category_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'product_category',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('buymore_db', true);
    await queryRunner.createTable(this.brandTable);
    await queryRunner.createTable(this.productCategoryTable);
    await queryRunner.createTable(this.productTable);
    await queryRunner.createTable(this.userTable);
    await queryRunner.createForeignKey('product', this.brandFK);
    await queryRunner.createForeignKey('product', this.categoryFK);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('buymore_db', true);
    await queryRunner.dropTable(this.brandTable);
    await queryRunner.dropTable(this.productCategoryTable);
    await queryRunner.dropTable(this.productTable);
    await queryRunner.dropTable(this.userTable);

    const table = await queryRunner.getTable('product');
    const brandFk = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('brand_id') !== -1,
    );
    await queryRunner.dropForeignKey('product', brandFk);
    const categoryFK = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('product_category_id') !== -1,
    );
    await queryRunner.dropForeignKey('product', categoryFK);
  }
}
