import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableProduct1587404929124 implements MigrationInterface {
    private table = new Table({
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
    
      public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
      }
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
      }
}
