'use strict'
let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 
week.shift();
alert(week);
week.unshift('Monday');
alert(week);
week.push('Sunday');
alert(week);
//week =[monday, tuesday, wednesday, thrusday, saturday, sunday]
week.splice(4, 0, 'friday');
alert(week);
week.forEach(alert);

/*function agregar(a){
    let b=  'feliz' +a;
    alert(b);
    return b;

}
*/