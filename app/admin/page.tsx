import {admin} from '../../lib/server';import Dashboard from './dashboard';import Login from './login';
export const dynamic='force-dynamic';
export default async function Page(){if(!await admin())return <Login/>;return <Dashboard/>;}
