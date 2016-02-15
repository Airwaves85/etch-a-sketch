$(document).ready(function() {

	function newGrid(){
	$('.container').html('');
	var $container = $('#container')

 	$container.addClass('container');

	var width;
	var height;

 	width = prompt('How width should it be ?');
 	height =  prompt('How height should it be ?');
 	var square_size = $container.width()/width -2;

 	var addSquares = function(){
 	for(var i = 0; i < height ; i++){
 		$container.append('<div class="clearLine"></div>');
 		for(var j = 0; j < width ; j++){
 			$container.append('<div class="square"></div>');
 		}
 	}
 };
 	addSquares();
 	
 	$('.square').css('width',square_size);
 	$('.square').css('height',square_size);

 	function getNewColor(){
 	var myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
 	var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
    var rand1 = myArray[Math.round(Math.random() * (myArray.length - 1))];
    var rand2 = myArray[Math.round(Math.random() * (myArray.length - 1))];
    var rand3 = myArray[Math.round(Math.random() * (myArray.length - 1))];
    var rand4 = myArray[Math.round(Math.random() * (myArray.length - 1))];
    var rand5 = myArray[Math.round(Math.random() * (myArray.length - 1))]; 
	return '#' +rand+rand1+rand2+rand3+rand4+rand5;
	};

	$square = $('.square');
	$square.hover(function(){
 		console.log('duba');
 		$(this).css('background-color', getNewColor());
 				},function(){
 		$(this).css('background-color',getNewColor() );
 					});
	};
	
 	$clearBtn = $('#clearBtn');

 	$clearBtn.click(function(){
 		newGrid();
 	});
});