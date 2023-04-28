//Your JavaScript goes in here

var c = false;
var c2 = false;
var c3 = false;
var rotate = false;
var looper;
var degrees = 0;
var switchcount = 0;
var phasecount = 0;
var loadcount = 0;
voltage1 = 0;
Current = 0;
Speed = 0;
e = false;
// function to turn on the main switch or mcb and give the value of voltage supply to both the voltmeter and ammeter 

function switch1on() {
	a = document.getElementById('switch1');

	if (c == false) {
		a.setAttribute('transform', 'translate(0,6)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.getElementById('firstbulb').style.fill = 'red';
			bulb1color = document.getElementById('secondbulb').style.fill = 'red';
			// bulb1color = document.getElementById('thirdbulb').style.fill = 'yellow';
		}
		// else if (phasecount == 1) {
		// 	bulb1coloer = document.getElementById('firstbulb').style.fill = 'red';
		// 	bulb1color = document.getElementById('secondbulb').style.fill = 'yellow';
		// 	b1 = document.getElementById('sbulb').innerHTML = 'B';
		// 	bulb1color = document.getElementById('thirdbulb').style.fill = 'blue';
		// 	b2 = document.getElementById('tbulb').innerHTML = 'Y';
		// }
		c = true;
		switchcount = switchcount + 1;
		loadcount = loadcount + 1;


		const voltageRange = document.getElementById("voltage1");
		voltageRange.disabled = false;
		voltageRange.addEventListener("input", function () {
			var value1 = voltageRange.value;
			var voltmeter_1 = document.getElementById('voltmeter').innerHTML = value1 + ' V';
			var value2 = (Math.random() * 0.5 + 0.1).toFixed(2);
			if (+value1 == 0) {
				value2 = 0;
			}
			const testVoltmeter = document.getElementById("test-voltmeter").innerHTML = (+value1) + +value2 + ' V'
			voltageRange.disabled = false;
		});

		var tableswitch = document.querySelector("#tableswitch");
		tableswitch.addEventListener('click', () => {

			if (rotate == false) {
				tableswitch.style.transform = "rotate(8deg)";
				tableswitch.style.transformOrigin = "500px 610px ";
				tableswitch.style.transition = 'transform 0.5s'
				rotate = true;

			}
			else if (rotate == true) {
				document.getElementById('tableswitch').style.transform = "rotate(54deg)";
				rotate = false;

			}
		});

	}

	else if (c == true) {
		a.setAttribute('transform', 'translate(0,20)');
		bulb1color = document.getElementById('firstbulb').style.fill = 'white';
		bulb1color = document.getElementById('secondbulb').style.fill = 'white';
		//bulb1color = document.getElementById('thirdbulb').style.fill = 'white';
		c = false;
		switchcount = 0;
		var voltmeter_1 = document.getElementById('voltmeter').innerHTML = '0 V';
		var testVoltmeter = document.getElementById("test-voltmeter").innerHTML = '0 V';
		const voltageRange = document.getElementById("voltage1");
		voltageRange.disabled = true;
		voltageRange.value = 0;

		document.getElementById("voltage-1-display").innerText = voltageRange.value;




	}
}


// function written to open or close the slide pannel which is given to the simulator 
function openNav() {
	document.getElementById("mySidepanel").style.width = "500px";
	document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

function getVoltage(id) {
	if (id === 'voltage1') {
		voltage1 = document.getElementById(id).value;
		document.getElementById("voltage-1-display").innerText = voltage1;
	}

}













// function to turn on the loadswitch button no 1
function loadswitch1on() {
	a = document.getElementById('loadswitch1');

	if (c == false) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb1');
			bulb1color.forEach((val) => {
				val.style.fill = 'red';
			})
		}
		c = true;
		switchcount = switchcount + 1;
	}


	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb1');
		bulb1color.forEach((val) => {
			val.style.fill = 'white';
		})
		c = false;
		switchcount = 0;

	}
}





// function to turn on the loadswitch button no 2

function loadswitch2on() {
	a = document.getElementById('loadswitch2');

	if (c == false) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb2');
			bulb1color.forEach((val) => {
				val.style.fill = 'red';
			})
		}
		c = true;
		switchcount = switchcount + 1;
	}


	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb2');
		bulb1color.forEach((val) => {
			val.style.fill = 'white';
		})
		c = false;
		switchcount = 0;

	}
}
// function to turn on the loadswitch button no 3


function loadswitch3on() {
	a = document.getElementById('loadswitch3');

	if (c == false) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb3');
			bulb1color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
	}


	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb3');
		bulb1color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;

	}
}
// function to turn on the loadswitch button no 4

function loadswitch4on() {
	a = document.getElementById('loadswitch4');

	if (c == false) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb4');
			bulb1color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
	}


	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb4');
		bulb1color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;

	}
}





// function to turn on the loadswitch button no 5
function loadswitch5on() {
	a = document.getElementById('loadswitch5');

	if (c == false) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb5');
			bulb1color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
	}


	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb5');
		bulb1color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;

	}
}



// function to rotate the needle of test-ammeter
// function tstammeterneedlefunc() {
// 	if (rotate == false) {
// 		document.getElementById('tstammeterneedle').style.transform = "rotate(5deg)";
// 		document.getElementById('tstammeterneedle').style.transformOrigin = "515px 580px";
// 		document.getElementById('tstammeterneedle').style.transition = 'transform 0.5s'
// 		rotate = true;
// 	}
// 	else if (rotate == true) {
// 		document.getElementById('tstammeterneedle').style.transform = "rotate(0deg)";
// 		rotate = false;
// 	}
// }


