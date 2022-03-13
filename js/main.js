var nav = document.querySelectorAll('.top-nav, .basic-title, .overlay');
console.log(nav)

var posScrollPre = window.pageYOffset;



window.onscroll = function () {
var posScrollNow = window.pageYOffset ;
if (posScrollPre > posScrollNow) {
    nav[1].classList.remove('hide');
    // nav[1].classList.remove('hide-basic');
    if (posScrollNow == 0) {
        nav[2].classList.remove('hide-basic');
        nav[0].classList.remove('hide-overlay');
    }
}
else{
    nav[1].classList.add('hide');
    nav[2].classList.add('hide-basic');
    nav[0].classList.add('hide-overlay');
}
posScrollPre = posScrollNow;
} 



