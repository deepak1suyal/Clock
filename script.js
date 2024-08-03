setInterval(()=>{
 d=new Date();
hi=d.getHours();
  mi=d.getMinutes();
  si=d.getSeconds();

hr=30*hi+ mi/2;
  mr=6*mi;
  sr=6*si; h.style.transform=`rotate(${hr}deg)`;
m.style.transform=`rotate(${mr}deg)`;

s.style.transform=`rotate(${sr}deg)`;

  
},1000);