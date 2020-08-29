
//  This is a lodder function

var button = document.querySelector('#scroll_top');
button.addEventListener("click",function () {

    window.scrollTo(0,0);
    
  
});






// //  scroll to top section


// // image filter
$(document).ready( function (){

    var $wrapper = $('.protfolio_wrappe3r');


    let links = document.querySelectorAll('.tabs a');

    links.forEach(link =>{
        link.addEventListener('click',function(e){

            let selector =link.dataset.filter;
           

            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'

                }
            });
            e.target.classList.add('active');
        })

    })







});


