

function change_background_color(){
    if (window.innerWidth > 1337 ){
        document.body.style.backgroundColor = "#ffb703"
    }
    else if((window.innerWidth < 1336) && (window.innerWidth > 505)) {
        document.body.style.backgroundColor = "#d90429"
    }
    else if (window.innerWidth <= 504){
        document.body.style.backgroundColor = "#003049"
    }

}

window.addEventListener('load', change_background_color);
window.addEventListener('resize', change_background_color);