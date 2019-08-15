
function clock() {
    var fullDate = new Date();
    console.log(fullDate);
    //console.log(fullDate.getHours());
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var second = fullDate.getSeconds();
    var date = new Date();
    
    
    if (hours < 10){
        hours = "0"+ hours;
        
    }
    if (minutes < 10){
        minutes = "0"+ minutes;
        
    }
    if (second < 10){
        second = "0"+ second;
        
    }
    document.getElementById('hours').innerHTML = hours  + ":";
    document.getElementById('minute').innerHTML = minutes + ":";
    document.getElementById('second').innerHTML = second;
    document.getElementById('date').innerHTML = date.toDateString();

}
setInterval(clock,1000);
