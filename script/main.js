$('.header-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpead: 2000,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});
$('.matches-slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: true,
    draggable: false,
    responsive:[
        {
            breakpoint: 1850,
            settings:{
                slidesToShow: 3, 
            }
        },
        {
            breakpoint: 1450,
            settings:{
                slidesToShow: 2, 
            }
        },
        {
            breakpoint: 1280,
            settings:{
                slidesToShow: 1, 
            }
        },
        {
            breakpoint: 768,
            settings:{
                infinity: false,
                arrows: false,
                dots: false,
            }
        }
    ]
});
$('.battle-slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: true,
    draggable: false,
    responsive:[
        {
            breakpoint: 1850,
            settings:{
                slidesToShow: 3, 
            }
        },
        {
            breakpoint: 1450,
            settings:{
                slidesToShow: 2, 
            }
        },
        {
            breakpoint: 1280,
            settings:{
                slidesToShow: 1, 
            }
        },
        {
            breakpoint: 768,
            settings:{
                infinity: false,
                arrows: false,
                dots: false,
            }
        }
    ]
});

window.addEventListener('load', () => {

    let matchBtn = document.querySelector('.match-btn');
    let battleBtn = document.querySelector('.battle-btn');
    let matchSlider = document.querySelector('.match-wrapper');
    let battleSlider = document.querySelector('.battle-wrapper');
    let match = true;
    let battle = false;
      
    if(battle == false){
         
        battleSlider.style.display = 'none'; 
    }

    matchBtn.addEventListener('click', () => {

        match = true;
        battle = false;
        matchBtn.classList += ' active';
        battleBtn.classList = '';
        if(match == true){
            matchSlider.style.display = 'block'; 
            battleSlider.style.display = 'none'; 
        }

    });

    battleBtn.addEventListener('click', () => {

        match = false;
        battle = true;
        battleBtn.classList += ' active';
        matchBtn.classList = '';
        if(battle == true){
            matchSlider.style.display = 'none'; 
            battleSlider.style.display = 'block'; 
        }

    });

    let table = document.querySelector('tbody');

    for (let el of table.children){
        el.addEventListener('mouseover', () => {

            el.classList = 'active';

        });
        el.addEventListener('mouseout', () => {

            el.classList = '';

        });
    }

    //TIMER
    setInterval(() => {
        let dateEnd = new Date('2021-12-28 18:24:00');
        let dateNow = new Date();
        let date = dateEnd - dateNow;
        let min = Math.floor(date / 1000 / 60);
        let sec = Math.floor(date / 1000 ) % 60;

        if(date < 0){
            min += 60;
            sec += 60;
        }
        
        document.querySelector('.minutes').innerHTML = `${min} мин.`;
        document.querySelector('.seconds').innerHTML = `${sec} сек.`;
        
        
    }, 1000);
    //TIMER

});