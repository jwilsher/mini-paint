$(document).ready(function() {
	console.log('ready!');


	var color = 'white';
	//("selector of this class or id").eventlistener(event, cb function -- the stuff that happens when this event occurs)
	$('.box').on("click", function() {
		$(this).addClass(color);
	})

	$(".box").on('dblclick', function() {
		$(this).removeClass('red blue green yellow white');
	})

	$('#reset').on('click', function() {
		$('.box').removeClass('red blue green yellow white');
	})

	$('#red').on('click', function() {
    	color = 'red';
  	})

  	$('#blue').on('click', function() {
    	color = 'blue';
  	})

  	$('#green').on('click', function() {
    	color = 'green';
  	})

  	$('#yellow').on('click', function() {
    	color = 'yellow';
  	})

  	$('#white').on('click', function() {
    	color = 'white';
  	})


})
