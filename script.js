function btn(num) {
	var screen = document.getElementById('Output-value');
	var screenvalue = screen.innerText;
	if(screenvalue == '0'){
		var newvalue = num;
	}
	else{
		var newvalue = screenvalue+num ;
	}
	
	screen.innerText = newvalue;

}
function sign(sign){
	var screen = document.getElementById('Output-value');
	var screenvalue = screen.innerText;
	
	var new_num = document.getElementById('history-value').innerText = screenvalue; 
		var screen = document.getElementById('Output-value');
		var screenvalue = screen.innerText;
		document.getElementById('history-value').innerText = screenvalue + sign
		screen.innerText = '0';
		
}

function equal() {

	var screen = document.getElementById('Output-value').innerText;
	var new_num = document.getElementById('history-value').innerText;
	var solution =new_num + screen ;
	answer = eval(solution)
	document.getElementById('Output-value').innerText = answer;
	document.getElementById('history-value').innerText = ' ';
	
}

function Clear(){
	document.getElementById('Output-value').innerText = '0';
	document.getElementById('history-value').innerText = ' ';	
}

function backspace(){
	var screen = document.getElementById('Output-value').innerText;
	var new_num = document.getElementById('history-value').innerText;
	var screenLenght = screen.length
	var screenLenght = screen;
	var newlength= screenLenght.slice(0,screenLenght.length-1)
	document.getElementById('Output-value').innerText = newlength;
}


