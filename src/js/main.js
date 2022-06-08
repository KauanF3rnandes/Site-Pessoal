var nav = document.querySelector('nav');

    window.addEventListener('scroll', function(){
    if (window.pageYOffset < 150) {
        nav.classList.add('bg-dark', 'bg-opacity-10');
    }else{
        nav.classList.remove('bg-opacity-10');
    }
});