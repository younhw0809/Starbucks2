const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');
console.log(serachInputEl);

searchEl.addEventListener('click',function(){
    serachInputEl.focus();
});

serachInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    serachInputEl.setAttribute('placeholder','통합검색');
});

serachInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    serachInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('#to_top');

window.addEventListener('scroll',_.throttle(function(){
    // console.log('scroll!!');
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl,0.5,{
            opacity:0,
            display:'none'
        });
        //TOP 보이기
        gsap.to(topEl , 0.2 ,{
            x:0
        });
        
    }else{
        //배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        //TOP 숨기기
        gsap.to(topEl , 0.2 ,{
            x:100
        });
    }
},300));

topEl.addEventListener('click',function(){
    gsap.to( window, 0.7 ,{
        scrollTo:0
    });
});


const fadeEls = document.querySelectorAll('.section1 .fade-in');
//console.log(fadeEls);
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1) * .7,//0.7,1.4,2.1,2.8,
        opacity:1
    });
});


new Swiper('.inner_left .swiper',{
    direction :'vertical',
    autoplay:true,
    loop:true,
    speed : 100
});
new Swiper('.promotion .swiper',{
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true,//1번 슬라이드가 가운데 보이기
    autoplay : true,
    loop:true,
    pagination : {
        el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable : true //페이지 번호 선택활성화
    },
    navigation:{
        nextEl : '.promotion .swiper-button-next',
        prevEl : '.promotion .swiper-button-prev'
        
    }
});

new Swiper('.section9 .swiper' ,{
    slidesPerView : 5,
    spaceBetween : 30,
    autoplay : true,
    loop:true,
    navigation:{
        nextEl : '.section9 .swiper-button-next',
        prevEl : '.section9 .swiper-button-prev'
    }
});

const promotionToggleEl = document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('.promotion');
let isHidePromotion = false;

promotionToggleEl.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    //console.log(isHidePromotion);
    if(isHidePromotion){
        //show
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        //hide
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

const spyEls = document.querySelectorAll('div.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl // 내가 감지해야할 요소 지정
       ,triggerHook : .8

    })
    .setClassToggle(spyEl , 'show')
    .addTo(new ScrollMagic.Controller());
});


