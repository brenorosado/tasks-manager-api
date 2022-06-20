import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const connectionSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  // logging: false,
  synchronize: false,
  // name: 'default',
  entities: ["src/**/**.entity{.ts,.js}"],
  migrations: ["src/database/migrations/*{.ts,.js}"]
  // subscribers: ['src/subscriber/**/*{.ts,.js}'],
});

connectionSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
