window.addEventListener('scroll', () =>{
    if(scrollY > 350){
        document.querySelector('.main-header').classList.add('stickey');
    }else{
        document.querySelector('.main-header').classList.remove('stickey');
    }
});



let sliderImages = document.querySelectorAll('.slider img');

let slidesCount = sliderImages.length;

let currentSlide = 1;


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');



nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

trigger();


function nextSlide(){
    if(!nextButton.classList.contains('disabled')){
        currentSlide++;
        trigger();
    }else{
        currentSlide = 1;
        trigger();  
    }
}

function prevSlide(){
    if(!prevButton.classList.contains('disabled')){
        currentSlide--;
        trigger();
    }else{
        currentSlide = slidesCount;
        trigger();  
    }
}


function trigger(){
    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');
    if (currentSlide == 1){
        prevButton.classList.add('disabled');
    }else{
        prevButton.classList.remove('disabled');
    }

        if (currentSlide == slidesCount){
            nextButton.classList.add('disabled');
        }else{
            nextButton.classList.remove('disabled');
        }  
}


function removeAllActive(){
    sliderImages.forEach(img =>{
        img.classList.remove('active');
    });
}


 const Categories = document.querySelector('.categories-btns');
 const men = document.querySelectorAll('.men');
 const women = document.querySelectorAll('.women');
 const kids = document.querySelectorAll('.kids');
    const all = document.querySelectorAll('.product');
const navLinks = document.querySelector('.nav-links');

navLinks.addEventListener('click', sortProducts)
 Categories.addEventListener('click', sortProducts );
 

 function sortProducts (e){
        // e.preventDefault();
       all.forEach(product =>{
           product.classList.remove('display');
       })
       if(e.target.classList.contains('btn-men')){
           women.forEach(product =>{
               product.classList.add('display');
           })
           kids.forEach(product =>{
               product.classList.add('display');
           })
       }else if(e.target.classList.contains('btn-women')){
           men.forEach(product =>{
               product.classList.add('display');
           })
           kids.forEach(product =>{
               product.classList.add('display');
           })
       }else if(e.target.classList.contains('btn-kids')){
           women.forEach(product =>{
               product.classList.add('display');
           })
           men.forEach(product =>{
               product.classList.add('display');
           })
       
   }
 }
