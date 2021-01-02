function plusM(){
	var mins= document.getElementById('minute');
	mins.value++;
	if(mins.value >= 60){mins.value = 0;}
	if(mins.value<10){ mins.value = "0"+mins.value;}
}
function minusM(){
	var mins= document.getElementById('minute');
	if (mins.value <= 0) {mins.value = 60;}
	mins.value--;
	if(mins.value >= 60){mins.value = 0;}
	if(mins.value<10){ mins.value = "0"+mins.value;}
}
function plusS(){
	var secs = document.getElementById('secs');
	secs.value++;
	if(secs.value >= 60){secs.value = 0;}
	if(secs.value<10){ secs.value = "0"+secs.value;}
}
function minusS(){
	var secs = document.getElementById('secs');
	if (secs.value <= 0) {secs.value = 60;}
	secs.value--;
	if(secs.value >= 60){secs.value = 0;}
	if(secs.value<10){ secs.value = "0"+secs.value;}
}

 var settheTime;

function start(){
	var mins = document.getElementById('minute');
	var secs = document.getElementById('secs');

	if (mins.value == 0 && secs.value == 0) {
		return;
	}
	else{
		settheTime = setInterval(counting , 1000);
		document.getElementById('start').style.display = "none";
		document.getElementById('btn1').style.display = "none";
		document.getElementById('btn2').style.display = "none";
		document.getElementById('btn3').style.display = "none";
		document.getElementById('btn4').style.display = "none";
	}
}

function counting(){
	var mins = document.getElementById('minute');
	var secs = document.getElementById('secs');

    secs.value--;
    if (secs.value<0) 
    	{ mins.value--; secs.value=59; 
          if (mins.value<10) { mins.value = "0"+mins.value; } 
           if (secs.value<10) { secs.value = "0"+secs.value; } 
    	}

    	if (mins.value == 0 && secs.value == 0) {
    		clearInterval(settheTime);
    		navigator.vibrate(2000);
    		document.getElementById('start').style.display = "inline";
		document.getElementById('btn1').style.display = "inline";
		document.getElementById('btn2').style.display = "inline";
		document.getElementById('btn3').style.display = "inline";
		document.getElementById('btn4').style.display = "inline";
    	}
}

function stop(){
	clearInterval(settheTime);
	document.getElementById('start').style.display = "inline";
		document.getElementById('btn1').style.display = "inline";
		document.getElementById('btn2').style.display = "inline";
		document.getElementById('btn3').style.display = "inline";
		document.getElementById('btn4').style.display = "inline";
}


 function Delete(){
 	clearInterval(settheTime);
 	var mins = document.getElementById('minute');
	var secs = document.getElementById('secs');
   
    mins.value = "00";
    secs.value = "00";
    document.getElementById('start').style.display = "inline";
		document.getElementById('btn1').style.display = "inline";
		document.getElementById('btn2').style.display = "inline";
		document.getElementById('btn3').style.display = "inline";
		document.getElementById('btn4').style.display = "inline";
}

 var body = document.getElementById('body');
 function color1(){
 	body.style.background = "#12475f";
 }
 function color2(){
 	body.style.background = "#90c7ee";
 }
 function color3(){
 	body.style.background = "lightgreen";
 }
 function color4(){
 	body.style.background = "#eeb390";
 }