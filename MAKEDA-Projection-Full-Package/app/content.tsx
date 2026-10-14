"use client";
import {useEffect} from 'react';
export default function Content({markup}:{markup:string}){useEffect(()=>{const s=document.createElement('script');s.src='/app.js';document.body.appendChild(s);return ()=>{s.remove();};},[]);return <div dangerouslySetInnerHTML={{__html:markup}}/>;}
