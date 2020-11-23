// javascript Animate onscroll Start

$(document).ready(function () {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});
window.onscroll = function () {
    myFunction()
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {
    // When arrow is clicked

    $('body, html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});


// FORM SECTION JS CODE START //
// id [name, email, phone, options, message]

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const website = document.querySelector('#website');

name.addEventListener('blur', valiDateName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
website.addEventListener('blur', validateWebsite);

function valiDateName() {
    //console.log(name.value);

    const reg = /^[a-zA-Z]{2,35}$/;

    if (!reg.test(name.value)) {
       
       name.classList.add('is-invalid');   
       
       name.classList.remove('is-valid'); 

    }

    else {
        
        name.classList.remove('is-invalid'); 

        name.classList.add('is-valid'); 
    }
}

function validateEmail () {

    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!reg.test(email.value)) {

        email.classList.add('is-invalid');

        email.classList.remove('is-valid');
    }
    else {

        email.classList.remove('is-invalid');

        email.classList.add('is-valid');
    }
}

function validatePhone () {
    const reg = /^(\+49-|\+49|0)?\d{15}$/;
    
    if (!reg.test(phone.value)) {

        phone.classList.add('is-invalid');

        phone.classList.remove('is-valid');
    }
    else {
        phone.classList.remove('is-invalid');

        phone.classList.add('is-valid');
    }
}

function validateWebsite () {
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,50})$/;

    if (!reg.test(website.value)) {

        website.classList.add('is-invalid');

        website.classList.remove('is-valid');
    }
    else {
        website.classList.remove('is.invalid');

        website.classList.add('is-valid');
    }
}
// FORM SECTION JS CODE END //