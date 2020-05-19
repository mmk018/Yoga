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