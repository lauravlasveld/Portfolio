$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE 
	$('.category_list .category_item [category="all"]').addClass('otro');
	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('otro');
		$(this).addClass('otro');

		// OCULTANDO PRODUCTOS =========================
		$('.cancion').css('transform', 'scale(0)');
		function hideProduct(){
			$('.cancion') .hide(); 
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.cancion[category="'+catProduct+'"]').show();
			$('.cancion[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.cancion').show();
			$('.cancion').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
	
});





 
    