var  daysE1=document.getElementById("days");
var hoursE1=document.getElementById("hours");
var minsE1=document.getElementById("mins");
var secondsE1=document.getElementById("seconds");


var matchStart= "jan 2 2050 07:30:00 PM ";






function countdown(){

    var  matchStarts=new Date(matchStart);
    var currentDate=new Date();
    var totalSeconds=Math.floor(matchStarts-currentDate)/1000;
    
    
    var days =Math.floor(totalSeconds/3600/24);
    var hours=Math.floor(totalSeconds/3600)%24;
    var mins=Math.floor(totalSeconds/60)%60;
    var seconds=Math.floor(totalSeconds)%60;
   

daysE1.innerHTML=days;
hoursE1.innerHTML=hours;
minsE1.innerHTML=mins;
secondsE1.innerHTML=seconds;
}
    
countdown();
setInterval(countdown,1000);


  

