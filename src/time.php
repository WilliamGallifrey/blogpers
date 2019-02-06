<?php
$dia = date('w');
$mes = date('n');
$diaN = date('j');
$hora = date('H:i:s');
$anyo = date('o');

switch ($dia) {
    case 0:
        $dia = 'Dom';
        break;
    case 1:
        $dia = 'Lun';
        break;
    case 2:
        $dia = 'Mar';
        break;
    case 3:
        $dia = 'Mie';
        break;
    case 4:
        $dia = 'Jue';
        break;
    case 5:
        $dia = 'Vie';
        break;
    case 6:
        $dia = 'Sab';
        break;
}

switch ($mes) {
    case 1:
        $mes = 'Ene';
        break;
    case 2:
        $mes = 'Feb';
        break;
    case 3:
        $mes = 'Mar';
        break;
    case 4:
        $mes = 'Abr';
        break;
    case 5:
        $mes = 'May';
        break;
    case 6:
        $mes = 'Jun';
        break;
    case 7:
        $mes = 'Jul';
        break;
    case 8:
        $mes = 'Ago';
        break;
    case 9:
        $mes = 'Sep';
        break;
    case 10:
        $mes = 'Oct';
        break;
    case 11:
        $mes = 'Nov';
        break;
    case 12:
        $mes = 'Dic';
        break;
}

echo $dia." ".$diaN." ".$mes." ".$anyo." ".$hora;
?>