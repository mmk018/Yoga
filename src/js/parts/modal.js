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