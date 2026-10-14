export function project(amount:number,frequency:string,rate:number){
 const monthly=Math.pow(1+rate/100,1/12); const points=Array.from({length:13},(_,m)=>{const capital=frequency==='monthly'?amount*m:amount;const value=frequency==='monthly'?Array.from({length:m},(_,i)=>amount*Math.pow(monthly,m-i)).reduce((a,b)=>a+b,0):amount*Math.pow(monthly,m);return {month:m,capital,value};});
 const last=points[12];return {...last,gain:last.value-last.capital,points};
}
