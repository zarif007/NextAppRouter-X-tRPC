import { drizzle } from "drizzle-orm/better-sqlite3";
import { publicProcedure, router } from "./trpc";
import Database from 'better-sqlite3'

import { todos } from '@/db/schema'
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { z } from "zod";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite)

migrate(db, { migrationsFolder: "drizzle" })

export const appRouter = router({
    getTodos: publicProcedure.query(async () => {
        return await db.select().from(todos).all()
    }),
    addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
        await db.insert(todos).values({ content: opts.input, completed: 0 }).run();
        return true
    })
});

export type AppRouter = typeof appRouter

