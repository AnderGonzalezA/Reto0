<?php
	function sumar($p1,$p2){
		return $p1+$p2;
	}
	function enviar($sumar,$p1,$p2){
		$resul = $sumar($p1,$p2);
		return $resul;
	}
	echo(enviar(sumar,2,3));
?>