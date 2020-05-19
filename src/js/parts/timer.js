function timer () {
       //Timer

       let deadline = '2020-05-28';
       function getTimeRemaining (endtime) {
           let t = Date.parse(endtime) - Date.parse(new Date()),
           seconds = Math.floor((t/1000) %60),
           minutes = Math.floor((t/1000/60) %60),
           hours = Math.floor((t/(1000*60*60)));
           if (t <= 0) {
               t = 0;
           }
           return {
               'total' : t,
               'hours' : hours,
               'minutes': minutes,
               'seconds' : seconds
           }
   
       }
   
       function setClock (id, endtime) {
           let timer = document.getElementById('timer'),
           hours = timer.querySelector('.hours'),
           minutes = timer.querySelector('.minutes'),
           seconds = timer.querySelector('.seconds'),
           timeInterval = setInterval(updateClock, 1000);
   
           function updateClock () {
               let t = getTimeRemaining(endtime);
               if (t.total <= 0) {
                   clearInterval(timeInterval);
                   t.hours = 0;
                   t.minutes = 0;
                   t.seconds = 0;
   
               }
               if (t.hours < 10) {t.hours = '0' + t.hours}
               if (t.minutes < 10) {t.minutes = '0' + t.minutes}
               if (t.seconds < 10) {t.seconds = '0' + t.seconds}
   
   
               hours.textContent = t.hours;
               minutes.textContent = t.minutes;
               seconds.textContent = t.seconds;
               
           }
       }
       setClock('timer', deadline );
}

module.exports = timer;