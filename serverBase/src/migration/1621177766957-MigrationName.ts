import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationName1621177766957 implements MigrationInterface {
    name = 'MigrationName1621177766957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "userId" integer, CONSTRAINT "REL_32b856438dffdc269fa84434d9" UNIQUE ("userId"))`);
        await queryRunner.query(`CREATE TABLE "provider" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cel" integer NOT NULL, "info" varchar NOT NULL, "per_price" decimal NOT NULL, "userId" integer, CONSTRAINT "REL_da1c78142007c621b5498c818c" UNIQUE ("userId"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "comment" varchar NOT NULL, "price" decimal NOT NULL, "quantity" integer NOT NULL, "date_in" datetime NOT NULL, "userId" integer, "categoryId" integer, "providerId" integer, CONSTRAINT "REL_329b8ae12068b23da547d3b479" UNIQUE ("userId"), CONSTRAINT "REL_ff0c0301a95e517153df97f681" UNIQUE ("categoryId"), CONSTRAINT "REL_f70b268affe05f6e9df0dab57b" UNIQUE ("providerId"))`);
        await queryRunner.query(`CREATE TABLE "temporary_category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "userId" integer, CONSTRAINT "REL_32b856438dffdc269fa84434d9" UNIQUE ("userId"), CONSTRAINT "FK_32b856438dffdc269fa84434d9f" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_category"("id", "name", "userId") SELECT "id", "name", "userId" FROM "category"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`ALTER TABLE "temporary_category" RENAME TO "category"`);
        await queryRunner.query(`CREATE TABLE "temporary_provider" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cel" integer NOT NULL, "info" varchar NOT NULL, "per_price" decimal NOT NULL, "userId" integer, CONSTRAINT "REL_da1c78142007c621b5498c818c" UNIQUE ("userId"), CONSTRAINT "FK_da1c78142007c621b5498c818c1" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_provider"("id", "name", "cel", "info", "per_price", "userId") SELECT "id", "name", "cel", "info", "per_price", "userId" FROM "provider"`);
        await queryRunner.query(`DROP TABLE "provider"`);
        await queryRunner.query(`ALTER TABLE "temporary_provider" RENAME TO "provider"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "comment" varchar NOT NULL, "price" decimal NOT NULL, "quantity" integer NOT NULL, "date_in" datetime NOT NULL, "userId" integer, "categoryId" integer, "providerId" integer, CONSTRAINT "REL_329b8ae12068b23da547d3b479" UNIQUE ("userId"), CONSTRAINT "REL_ff0c0301a95e517153df97f681" UNIQUE ("categoryId"), CONSTRAINT "REL_f70b268affe05f6e9df0dab57b" UNIQUE ("providerId"), CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f70b268affe05f6e9df0dab57b0" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "comment", "price", "quantity", "date_in", "userId", "categoryId", "providerId") SELECT "id", "name", "comment", "price", "quantity", "date_in", "userId", "categoryId", "providerId" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "comment" varchar NOT NULL, "price" decimal NOT NULL, "quantity" integer NOT NULL, "date_in" datetime NOT NULL, "userId" integer, "categoryId" integer, "providerId" integer, CONSTRAINT "REL_329b8ae12068b23da547d3b479" UNIQUE ("userId"), CONSTRAINT "REL_ff0c0301a95e517153df97f681" UNIQUE ("categoryId"), CONSTRAINT "REL_f70b268affe05f6e9df0dab57b" UNIQUE ("providerId"))`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "comment", "price", "quantity", "date_in", "userId", "categoryId", "providerId") SELECT "id", "name", "comment", "price", "quantity", "date_in", "userId", "categoryId", "providerId" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "provider" RENAME TO "temporary_provider"`);
        await queryRunner.query(`CREATE TABLE "provider" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cel" integer NOT NULL, "info" varchar NOT NULL, "per_price" decimal NOT NULL, "userId" integer, CONSTRAINT "REL_da1c78142007c621b5498c818c" UNIQUE ("userId"))`);
        await queryRunner.query(`INSERT INTO "provider"("id", "name", "cel", "info", "per_price", "userId") SELECT "id", "name", "cel", "info", "per_price", "userId" FROM "temporary_provider"`);
        await queryRunner.query(`DROP TABLE "temporary_provider"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME TO "temporary_category"`);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "userId" integer, CONSTRAINT "REL_32b856438dffdc269fa84434d9" UNIQUE ("userId"))`);
        await queryRunner.query(`INSERT INTO "category"("id", "name", "userId") SELECT "id", "name", "userId" FROM "temporary_category"`);
        await queryRunner.query(`DROP TABLE "temporary_category"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "provider"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
