import Database from 'better-sqlite3';
import {drizzle} from 'drizzle-orm/better-sqlite3';
import {migrate} from 'drizzle-orm/better-sqlite3/migrator';
import {mkdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import * as schema from './schema';
let database: ReturnType<typeof createDatabase> | undefined;
function createDatabase(){
 const file=process.env.DATABASE_PATH || './data/makeda.sqlite';
 mkdirSync(dirname(file),{recursive:true});
 const sqlite=new Database(file);
 sqlite.pragma('journal_mode = WAL');
 sqlite.pragma('busy_timeout = 5000');
 const db=drizzle(sqlite,{schema});
 migrate(db,{migrationsFolder:resolve(process.cwd(),'drizzle')});
 return {sqlite,db};
}
export function getDb(){return (database ??= createDatabase()).db;}
export function getSqlite(){return (database ??= createDatabase()).sqlite;}
