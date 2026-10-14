import {getDb} from '../db';
import {settings} from '../db/schema';
import {defaults} from './defaults';
import {eq} from 'drizzle-orm';
import {hasSession} from './admin-auth';
export async function config(){const row=await getDb().select().from(settings).where(eq(settings.id,'config')).get();return row?JSON.parse(row.value):defaults;}
export async function admin(){return hasSession();}
export function sameOrigin(r:Request){const expected=process.env.APP_URL || (process.env.RAILWAY_PUBLIC_DOMAIN ? 'https://'+process.env.RAILWAY_PUBLIC_DOMAIN : new URL(r.url).origin);return r.headers.get('origin')===new URL(expected).origin;}
export function json(v:unknown,status=200){return Response.json(v,{status,headers:{'Cache-Control':'no-store'}});}
