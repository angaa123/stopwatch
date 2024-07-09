let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
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
	[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
	display.innerHTML = "00:00:00:00";
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

	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;
	let ms =
		milliseconds < 10
			? "00" + milliseconds
			: milliseconds < 100
			? "0" + milliseconds
			: milliseconds;

	display.innerHTML = `${h}:${m}:${s}:${ms}`;
}
