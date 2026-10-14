import { admin, json } from '../../../../lib/server';
import { getDb } from '../../../../db';
import { leads } from '../../../../db/schema';
import { desc } from 'drizzle-orm';
import { leadCsv } from '../../../../lib/lead-csv';

export async function GET() {
  if (!await admin()) return json({error:'Accès réservé aux administrateurs autorisés'},403);
  try {
    const rows = await getDb().select().from(leads).orderBy(desc(leads.created)).all();
    return new Response(leadCsv(rows), {headers:{
      'Content-Type':'text/csv; charset=utf-8',
      'Content-Disposition':`attachment; filename="makeda-prospects-${new Date().toISOString().slice(0,10)}.csv"`,
      'Cache-Control':'no-store',
      'X-Content-Type-Options':'nosniff',
    }});
  } catch {
    return json({error:'Export indisponible. Veuillez réessayer.'},503);
  }
}
