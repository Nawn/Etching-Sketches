var CreateGrid = function (option) {
	var drawGrid = $('#drawSpace');
	drawGrid.html("");
	
	var gridSize = prompt("Enter Integer between 1 and 100:");
	
	if (gridSize >= 1 && gridSize <= 100)
	{
		var blockSize = drawGrid.width()/gridSize - 2;
		for (i = 0; i < gridSize; i++)
		{
			for (j = 0; j < gridSize; j++)
			{
				drawGrid.append('<div class = "drawBlock"></div>');
			}
			drawGrid.append('<div class = "newLine"></div>');
		}
		$('.drawBlock').css('width', blockSize);
		$('.drawBlock').css('height', blockSize);
		
		$('.drawBlock').mouseover(function () {
			switch (option){
				case 1:
					$(this).addClass('drawBlockLit');
					break;
				case 2:
					$(this).css("background-color", getRandomColor());
					break;
				case 3:
					$(this).fadeTo('slow', "-=0.25");
					break;
			}
			
		});
	}
	else
	{
		alert("No, too crazy, try again!");
	}
};

var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}