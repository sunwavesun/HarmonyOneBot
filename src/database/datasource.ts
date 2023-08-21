import "reflect-metadata"
import { DataSource } from "typeorm"
import { Chat } from "./entities/Chat"
import { User } from "./entities/User";
import config from "../config"

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.db.url,
  entities: [Chat, User],
  synchronize: false,
  migrations: ['./src/database/migrations/**/*.{.ts,.js}'],
  logging: false,
})