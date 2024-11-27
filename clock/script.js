





let display = document.getElementById("display");

setInterval(()=>{
   
    let hour = new Date().getHours()%12;
    if(hour == 0){
        hour = 12 ;
    }
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let time = `${hour.toString().padStart(2,'0')} : ${minute.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`
    display.innerText = time;
},1000);

let date = document.getElementById("date");
date.innerText =` ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ` ;

