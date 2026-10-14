
import {cookies} from 'next/headers';
const enc=new TextEncoder();
export const cookieName='__Host-makeda-admin';
async function key(){const secret=process.env.ADMIN_SESSION_SECRET;if(!secret)throw Error('Login unavailable');return crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
export async function makeSession(){const expires=String(Date.now()+8*60*60*1000);const sig=await crypto.subtle.sign('HMAC',await key(),enc.encode(expires));return expires+'.'+Array.from(new Uint8Array(sig),b=>b.toString(16).padStart(2,'0')).join('');}
export async function hasSession(){try{const token=(await cookies()).get(cookieName)?.value||'';const [expires,sig]=token.split('.');if(!/^\d+$/.test(expires)||Number(expires)<=Date.now()||!/^[a-f0-9]{64}$/.test(sig))return false;return await crypto.subtle.verify('HMAC',await key(),Uint8Array.from(sig.match(/../g)!,x=>parseInt(x,16)),enc.encode(expires));}catch{return false;}}
export async function validCredentials(username:string,password:string){const expected=process.env.ADMIN_PASSWORD;if(!expected)return false;const digest=async(s:string)=>new Uint8Array(await crypto.subtle.digest('SHA-256',enc.encode(s)));const a=await digest(username+'\0'+password),b=await digest((process.env.ADMIN_USERNAME||'makedauser')+'\0'+expected);let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];return diff===0;}
