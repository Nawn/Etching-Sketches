var CreateGrid = function (option) {
	$('#drawSpace').html("");
	
	var gridSize = prompt("Enter Integer between 1 and 100:");
	
	if (gridSize >= 1 && gridSize <= 100)
	{
		var blockSize = $('#drawSpace').width()/gridSize - 2;
		for (i = 0; i < gridSize; i++)
		{
			for (j = 0; j < gridSize; j++)
			{
				$('#drawSpace').append('<div class = "drawBlock"></div>');
			}
			$('#drawSpace').append('<div class = "newLine"></div>');
		}
		$('.drawBlock').css('width', blockSize);
		$('.drawBlock').css('height', blockSize);
		
		$('.drawBlock').mouseover(function () {
			switch (option){
				case 1:
					$(this).addClass('drawBlockLit');
					break;
				case 2:
					console.log("touched");
					break;
			}
			
		});
	}
	else
	{
		alert("No, too crazy, try again!");
	}
};