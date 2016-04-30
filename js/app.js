

//2. Agregar Overlay Lighbox
var $overlay = $("<div id ='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 Con imagen
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//2.3 Agregar el overlay al texto
$("body").append($overlay);


//1. Usuario da un click en un link que rodea la imagen
$("#galeria li a").click (function(event){
	event.preventDefault();
	var href= $(this).attr("href");
//1.1 Mostrar el ligh box con la imagen a la que se dio
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log("href");
});

$overlay.click(function()
{
	$overlay.hide();
});


//
var $select =$("<select></select>");
$("#menu").append($select);
	//Recorrer el menu
	$("#menu a").each(function(){
		var $anchor=$(this);
	//crear una opcion para el select por cada elemento del menu
		var $option=$("<option></option>");
	//Obtener cada valor de la opcion del atributo href
		$option.val($anchor.attr("href"));
	// Obtener el texto en cada opcion
		$option.text($anchor.text());
	// Agregar la opcion al select
		$select.append($option);

//Obtener si el link es la pagina actual

	if ($(this).hasClass("selected"))
	 {
	 	$option.prop("selected", true);
	}
});

//Queremos que se cambie la pagina al cambiar el elemento seleccionadp
$select.change(function(){
	window.location=$select.val();// Toma el valor d ela opcion
});


var $button=$("<button>Ir</button>");
$("#menu").append($button);

$button.click(function(){
//Toma el valor de la opcion seleccionada
	window.location=$select.val();
});

function esPasswordValido(){
	return($password.val().length>8);
}

function coincidenPasswords(){
	return ($password.val()===$confirmPassword.val());
}



function eventoPassword(){
	//validar si la clave es valida
	if(esPasswordValido())
	{
		//Esconder ayuda si la clave es valida
		$password.next().hide();
	}else{
		//Caso contrario mostrar ayuda
		$password.next().show();
	}
}

function usuarioIngresado(){
	return ($("#username").val().length>0);
}




function validacionCompleta(){
	return esPasswordValido() && coincidenPasswords() && usuarioIngresado()
}

function confirmaPassword(){
	if ($password.val()=== $confirmPassword.val()) {
		$confirmPassword.next().hide();
	}else{
		$confirmPassword.next().show();
	}
}

function puedeEnviar(){
	$("#submit").prop("disabled", !validacionCompleta());
}

//Cuando usuario ingresa clave (evento input)
$password.focus(eventoPassword).keyup(eventoPassword).focus(confirmPassword);
$confirmPassword.focus(confirmaPassword).keyup(confirmaPassword);
puedeEnviar();