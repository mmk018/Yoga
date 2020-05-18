'use strict';


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

/* let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
        
    }
    showThis();
    
}); */

let options = {
    width:  1366,
    height: 768,
    background: "red",
    font : {
        size: '16px',
        color: '#fff'
    }

};

console.log(JSON.parse(JSON.stringify(options)));

////Promise

let drink = 1;


function shoot (arrow, headshot, fail) {
    console.log('You made a shot');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail('You missed');
    }, 3000)
    
}

function win () {
    console.log('you win');
    (drink == 1) ? buyBeer() : giveMoney();
    
}

function buyBeer () {
    console.log('The Beer for You is bought');
    
}

function giveMoney () {
    console.log('Cash was paid to You');
    
}

function lose () {
    console.log('You lose');
    
}



shoot({}, function (mark){
    console.log('You get point');
    win(mark, buyBeer, giveMoney );
    
}, function(miss) {
    console.error(miss);
    lose();
}


)


///promise variant

let drink = 1;


function shoot (arrow, ) {
    console.log('You made a shot');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('You missed');
        }, 3000)
    });
    return promise;

    
    
};

function win () {
    console.log('you win');
    (drink == 1) ? buyBeer() : giveMoney();
    
}

function buyBeer () {
    console.log('The Beer for You is bought');
    
}

function giveMoney () {
    console.log('Cash was paid to You');
    
}

function lose () {
    console.log('You lose');
    
}



shoot({})
    .then(mark => console.log('You get point'))
    .then(win)//then vipolnjaetsa odnja za drugoi , v slutsae pobedi, resolve
    .catch(lose)// eta funktsija loose, kotoraja optrabotaet v slutsae proigrisa


  




////Promise test



infoDelegation.addEventListener('click', function(event) {
    console.log(event.target);
    moreInfo.forEach(function (element) {
        if (element === event.target) {
            console.log(element);
            
            overlay.style.display = 'block';
            
            document.body.style.overflow = 'hidden';
        }
        
    });
   

    
});

//Form 
let message = {
    loading : 'Загрузка...',
    success : 'Спасибо, мы скоро с вами свяжемся',
    failure : 'Что то пошло не так',

};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    ////////
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);//vse iz formi v dati
        console.log(formData);
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        console.log(formData);
        
        console.log(obj);
        
        
        
        let json = JSON.stringify(obj);
        console.log(json);
        
        //////
        

        //dlja konvertatsii v JSOn, nam nuzen promezutotsnij object

        request.send(json);//poskoljku eto post, to u nego estj body
        request.addEventListener('readystatechange', function () {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;

            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        })
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';// obnulim input//
    }    

}) ; 


/////

let req = new Promise(function(resolve, reject) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);//vse iz formi v dati
        console.log(formData);
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        console.log(formData);
        
        console.log(obj);
        
        
        
        let json = JSON.stringify(obj);
        console.log(json); 
    });    

    });

    req.then(() => {
        request.send(json);//poskoljku eto post, to u nego estj body
        request.addEventListener('readystatechange', function () {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;

            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        })
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';// obnulim input//
    }  
    });

    req.catch(() => {
        console.log('Reject is happend');
        
    });
    req.finally(() => {
        console.log('Thank You ,that you are with us!');
        
    });

