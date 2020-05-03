'use strict';



let age = document.getElementById('age');



function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст "  + this.value);
}
let thisReplace =  showUser.bind(age);

showUser(thisReplace('John', 'Snow'));