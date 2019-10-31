$(document).ready(()=>{
    $('.card-img').on('click', (event)=> {
        $(event.currentTarget).siblings().toggleClass('active');
    });

});


