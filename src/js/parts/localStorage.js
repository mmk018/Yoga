function localStorage () {
            ///Local storage

        localStorage.setItem('number',1);//

        console.log(localStorage.getItem('number'));

        localStorage.removeItem('number');

        localStorage.clear();

        window.addEventListener('DOMContentLoaded', function() {
            let checkbox = document.getElementById('rememberMe'),
            change = document.getElementById('change'),
            form = document.getElementsByTagName('form')[0];


            if(localStorage.getItem('isChecked') === 'true') {
                checkbox.checked = true;
            }

            if(localStorage.getItem('bg') === 'changed') {
                form.style.backgroundColor = '#333';
            }

            checkbox.addEventListener('click', function() {
                localStorage.setItem('isChecked',true);//esli input checked
            })
            change.addEventListener('click', function() {
                localStorage.setItem('bg', 'changed');
                form.style.backgroundColor = '#333';
            })

            let persone = {
                name: 'Alex',
                age: 25,
                tech: ['mobile', '_notebook_']
            }

            let serializedPersone = JSON.stringify(persone);

            localStorage.setItem('Alex', serializedPersone);
            console.log(JSON.parse(localStorage.getItem('Alex')));
            

        });

}

module.exports = localStorage;