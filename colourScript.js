var box = '<div class="resizable" class="ui-widget-content"> <h3 class="ui-widget-header">Resizable</h3> </div>'



$(document).ready(function() {

console.log('Ready mofo')

	


$("#box").on("click", function(){
	console.log('box clicked');

	$('#containment-wrapper').append(box)

	$( function() {
    $( ".resizable" ).resizable();
    $( ".resizable").draggable({ containment: "#containment-wrapper", scroll: false });
  } );

});

});