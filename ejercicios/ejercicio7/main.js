
function miFunc() {
     
    setInterval(()=>{param = Date.now()},500);     
    return param};

//miFunc((p)=>{console.log(p)});
  
console.log(miFunc());

//setInterval(()=>{console.log(Date.now())},500);  