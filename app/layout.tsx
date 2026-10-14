import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'MAKEDA Projection | Votre avenir se prépare',description:'Simulez votre épargne, découvrez les solutions Makeda et demandez un rendez-vous découverte.',manifest:'/manifest.json',icons:{icon:'/makeda-logo.svg',apple:'/icon-192.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>;}
