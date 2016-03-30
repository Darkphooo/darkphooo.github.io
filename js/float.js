var xPos = 300;
var yPos = 200; 
var step = 1;
var delay = 30; 
var height = 0;
var Hoffset = 0;
var Woffset = 0;
var yon = 0;
var xon = 0;
var pause = true;
var interval;
floatad.style.top = yPos;
function changePos() 
{
	width = document.body.clientWidth;
	height = document.body.clientHeight;
	Hoffset = floatad.offsetHeight;
	Woffset = floatad.offsetWidth;
	floatad.style.left = xPos + document.body.scrollLeft+'px';
	floatad.style.top = yPos + document.body.scrollTop+'px';
	if (yon) 
		{yPos = yPos + step;}
	else 
		{yPos = yPos - step;}
	if (yPos < 80) 
		{yon = 1;yPos = 80;}
	if (yPos >= (height - Hoffset)) 
		{yon = 0;yPos = (height - Hoffset);}
	if (xon) 
		{xPos = xPos + step;}
	else 
		{xPos = xPos - step;}
	if (xPos < 0) 
		{xon = 1;xPos = 0;}
	if (xPos >= (width - Woffset)) 
		{xon = 0;xPos = (width - Woffset);   }
	}
	
	function start()
	 {
	 	floatad.visibility = "visible";
		interval = setInterval('changePos()', delay);
	}
	function pause_resume() 
	{
		if(pause) 
		{
			clearInterval(interval);
			pause = false;}
		else 
		{
			interval = setInterval('changePos()',delay);
			pause = true; 
			}
		}
	start();