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