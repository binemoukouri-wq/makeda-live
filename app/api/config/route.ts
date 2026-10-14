export const dynamic='force-dynamic';
import {config,json} from '../../../lib/server';
export async function GET(){try{return json(await config());}catch{return json({error:'Configuration indisponible'},503);}}
