/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded' , function () {

    'use strict';
    let calculator = __webpack_require__(/*! ./parts/calculator */ "./src/js/parts/calculator.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        formContact = __webpack_require__(/*! ./parts/formContact */ "./src/js/parts/formContact.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");

    calculator();
    form();
    formContact();
    modal();
    slider();
    tabs();
    timer();    


});

/***/ }),

/***/ "./src/js/parts/calculator.js":
/*!************************************!*\
  !*** ./src/js/parts/calculator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator () {
            ///Calculator

        let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)* 4000;


            if(restDays.value == ''  ) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });


        restDays.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)* 4000;


            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });    
}

module.exports = calculator;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form () {
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
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';// obnulim input//
                    } 
                });
            
            });
        
            req.catch(() => {
                console.log('Reject is happend');
                
            });
            req.finally(() => {
                console.log('Thank You ,that you are with us!');
                
            });
        
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/formContact.js":
/*!*************************************!*\
  !*** ./src/js/parts/formContact.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formContact () {
    //Form Contact
    let formContact = document.querySelector('#form'),
    inputContact = formContact.getElementsByTagName('input');
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        formContact.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(formContact);//vse iz formi v dati
        console.log(formContact);
        
        console.log(formData);
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        console.log(obj);
        
        let json = JSON.stringify(obj);

        console.log(json);
        

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
    for (let i = 0; i < inputContact.length; i++) {
        inputContact[i].value = '';// obnulim input
    }    

}) ; 

}


module.exports = formContact;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal () {
    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreInfo = document.querySelectorAll('.description-btn'),
        infoDelegation = document.querySelector('.info');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //////


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
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider () {
            //SLider

        let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');




        showSlides(slideIndex);





        function showSlides(n) {
            if(n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
        }

        showSlides(slideIndex);

        function plusSlides (n) {
        showSlides(slideIndex += n);

        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
        plusSlides(-1);

        } );

        next.addEventListener('click', function() {
        plusSlides(1);
        });

        dotsWrap.addEventListener('click', function (event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1] ) {
                currentSlide(i);
            }
        }
    });
}
module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs () {
    


        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++ ) {
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');


            }
        }    


        hideTabContent(1);



        function showTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show'); 
            }
        }
        info.addEventListener('click', function (event) {
            let target = event.target;
            if(target && target.classList.contains('info-header-tab')) {
                for(let i = 0; tab.length; i++  ) {
                    if(target == tab[i]) {
                    hideTabContent(0); 
                    showTabContent(i);
                    break;
                    } 
                }
            }
        });


}

module.exports = tabs;



/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map