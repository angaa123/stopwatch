let milliseconds = 0 , seconds = 0, minutes = 0, hours =0;
let display = document.querySelector(".time");
let timerId = null;

document.getElementById("start").addEventListener("click", () => {
	if (timerId !== null) {
		clearInterval(timerId);
	}
	timerId = setInterval(updateTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
	clearInterval(timerId);
});

document.getElementById("reset").addEventListener("click", () => {
	clearInterval(timerId);
	milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
	display.innerHTML = "0:0:0:0";
});

function updateTimer() {
	milliseconds += 10;
	if (milliseconds == 1000) {
		milliseconds = 0;
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
			if (minutes == 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	let h = hours ;
	let m = minutes ;
	let s = seconds ;
	let ms =
		milliseconds;

	display.innerHTML = `${h}:${m}:${s}:${ms}`;
}
