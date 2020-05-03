// Counstruktor funktion vsegda s bolsoj bukvi dlja sozdania novih objektov. Funktisja konstruktor, knstruieuet novie objekti

/* function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello! " + this.name);
        
    };

}

let ivan = new User("Ivan", 25);
let alex = new User("Alex", 20);

console.log(ivan);
console.log(alex);
ivan.hello();

User.prototype.exit = function () {
    console.log("User " + this.name + " pressed quit ");
}

ivan.exit();

//ES6  

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log("Hello! $(this.name)")
    }
    exit() {
        console.log("User $(this.name) is quit")
    }
}

//Contex Visova THis
function showThis (a,b) {
    console.log(this);
    function sum () {
        console.log(this);
        return a + b;
    }
    console.log(sum());
    
}
showThis(4,5);
showThis(5,5); */


// Prosto vizov funktsii- polutsim libo window / undefined


/* let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
        
    }
}; */
/* 
obj.sum();// tak mi polutsaem nas object polnostju, hotja obrasaemsja toljko k odnomu methodu

//2) Metod objecta this = samomu objectu

//3) Constructor (new) - this = nvij soydannij object

let user = {
    name: "John"
};

function sayName (surname) {
    console.log(this);
    console.log(this.name  + surname);
    
    
}
console.log(sayName.call(user, 'Smith'));//pri metode call mi mozem peredavatj toljko odin string parametr
console.log(sayName.apply(user,['Snow']));//pri metode apply mozem peredatj tselij massive

function count (number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10)); */

// Ukazanie konkretnogo konteksta- call, apply i bind

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
        
    }
    showThis();
    
});