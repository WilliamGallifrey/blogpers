$(document).ready(function () {

    setTimeout(() => {
        $('#modalInner').css('opacity','1');

        setTimeout(() => {
            $('#modalInner').css('box-shadow', 'rgba(0, 0, 0, 0.7) 29px 42px');
        }, 100);
    }, 1900);

    setInterval(() => {
        $.ajax({
            type: "GET",
                url: "src/time.php",
                success : function(data){
                    $('#datetime').html(data);
                }
        });
    }, 1000);
    
});

function openFullscreen() {

    $('main').css('filter','brightness(1)');
    setTimeout(() => {

        $('#modalInner').css('box-shadow', 'rgba(0, 0, 0, 0.7) 0px 0px');
        setTimeout(() => {
            $('#modalInner').css('opacity','0');
        $('#modalText').css('opacity','0');
        }, 300);        

        setTimeout(() => {
            $('#modal').css('opacity','0');
        }, 600);

    }, 150);   
    
    setTimeout(() => {
        $('#modalInner').css('display','none');
        $('#modal').css('display','none');
        var elem = $('body')[0];
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
        }

        $

    }, 1000);    
  }

  function noFullScreen()
  {
    $('main').css('filter','brightness(1)');
    setTimeout(() => {

        $('#modalInner').css('box-shadow', 'rgba(0, 0, 0, 0.7) 0px 0px');
        setTimeout(() => {
            $('#modalInner').css('opacity','0');
        $('#modalText').css('opacity','0');
        }, 300);        

        setTimeout(() => {
            $('#modal').css('opacity','0');
            $('#modal').css('display','none');           
        }, 600);

    }, 150);
  }


$('#cv').hover(function(){
    $('#cv').css('background-color','magenta');
    $('#pcv').css('color','white');
    setTimeout(() => {
        $('#cv').html('<p class="bloque">Idiomas:</p><p class="bloque">Inglés...........................................................................................C2</p><p class="bloque">Francés......................................................................................A2</p><p class="bloque">Valenciano.............................................................................Medio</p><p class="bloque">CV en <a href="">pdf</a></p>'); 
        $('#pcv').css('color','white');
    }, 400);
    
});

$('#cv').mouseleave(function(){
    $('#cv').css('background-color','lime');
    $('#pcv').css('color','transparent');
    setTimeout(() => {
        $('#cv').html('<span id="cvText" class="titulo">CURRICULUM</span><p class="bloque negro">JS...............................................................es6</p><p class="bloque negro">PHP.............................................................v7.3</p><p class="bloque negro">HTML..........................................................5<p class="bloque negro">&lt;Más detalles&gt;</p></p>');
        $('#pcv').css('color','black');
    }, 400);
    
});

$('#contacto').hover(function(){
    $('#contactoTitulo').css('color','white');
    $('#btnContacto').css('color','white');
    $('#btnContacto').css('border-color','white');    
    $('#contacto').css('background-image','url(img/whites.gif)');
    $('#pcv').css('color','white');
    setTimeout(() => {
        
    }, 400);
    
});

$('#contacto').mouseleave(function(){
    
    $('#contactoTitulo').css('color','black');
    $('#btnContacto').css('color','black');
    $('#btnContacto').css('border-color','black');
    $('#contacto').css('background-image','none');
    $('#contacto').css('background-color','yellow');
    $('#pcv').css('color','white');
    setTimeout(() => {
        
    }, 400);
    
});
