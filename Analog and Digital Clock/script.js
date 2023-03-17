const hourEl=document.querySelector(".hour")
const minuteEl=document.querySelector(".minute")
const secondEl=document.querySelector(".second")

function updateClock(){
    const realtime = new Date();
    setTimeout(updateClock,1000);
    const hour=realtime.getHours();
    const minute=realtime.getMinutes();
    const seconds=realtime.getSeconds();
    // hours Rotate
    const hourDeg=(hour/12)*360;
    hourEl.style.transform=`rotate(${hourDeg}deg)`;
    // minute Rotate
    const minuteDeg=(minute/60)*360;
    minuteEl.style.transform=`rotate(${minuteDeg}deg)`;
    // second Rotate
    const secondDeg=(seconds/60)*360;
    secondEl.style.transform=`rotate(${secondDeg}deg)`;
    
}
updateClock();

// <!-- /* ==================Now turn to bottom --- Digital Clock================= */ -->
const digiHour=document.querySelector(".realHour");
const digiMinute=document.querySelector(".realMinute");
const digiSecond=document.querySelector(".realSecond");
function UpdateDigitalClock(){
    const digiRealTime=new Date();
    setTimeout(UpdateDigitalClock,1000);
    const digiHour1=digiRealTime.getHours();
    const digiMinute1=digiRealTime.getMinutes();
    const digiSecond1=digiRealTime.getSeconds();
    digiHour.textContent=digiHour1;
    digiMinute.textContent=digiMinute1;
    digiSecond.textContent=digiSecond1;

}
UpdateDigitalClock();

// =================border Color Change==================
let color2=document.getElementById("digitalClock")
let color3=document.getElementById("digitalClockContainer")
let color4=document.getElementById("heading")
color4.textContent="Real-Time-In-India";
let array=["aquamarine","bisque","cadetblue","orange","burlywood","white"]
let i=0;
function colorhange(){
    while(i<array.length){
        color2.style.borderColor=array[i];
        color3.style.borderColor=array[i];
        color4.style.color=array[i];
        i++;
        if(i==array.length){
            i=0;
        }
        break;
    }

}
setInterval(colorhange,1000)



