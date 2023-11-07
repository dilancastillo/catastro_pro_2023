//Navbar animado
function openNav() {
    document.getElementById("navbar-home").style.width = "330px";
    document.querySelector(".top-images").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("navbar-home").style.width = "0";
    document.querySelector(".top-images").style.visibility = "visible";
}

//Scroll de toda la página
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
});

//Cambiar imagen cuando se pone el cursor encima
function changeImage(id, src) {
    document.getElementById(id).src = src;
    /*var img = document.getElementById(id);
    img.src = src;
    img.style.transform = "scale(1.5)";
}

function revertImage(id, src) {
    var img = document.getElementById(id);
    img.src = src;
    img.style.transform = "scale(1)";
}*/
}

//Cambiar imagen de trámites cuando se le da clic al enlace
$(document).ready(function () {
    $('.tramites-menu a').click(function (e) {
        e.preventDefault();
        $('.card').hide();
        $('.tramites-text').hide();
        $('.tramites-menu a').removeClass('active');
        $(this).addClass('active');

        var linkId = $(this).attr('id');
        if (linkId === 'link-1') {
            $('#image-1').show();
            $('#text-1').show();
        } else if (linkId === 'link-2') {
            $('#image-2').show();
            $('#text-2').show();
        } else if (linkId === 'link-3') {
            $('#image-3').show();
            $('#text-3').show();
        }
    });
});
