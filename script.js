let counter = 0;

function increase() {
	counter++;
}

function decrease() {
	counter--;
}

function reset() {
	counter = 0;
}

function handleInput(e) {
	let key = e.key;
	switch (key) {
		case 'a': increase(); break;
		case 's': decrease(); break;
		case 'r': reset(); break;
	}

	let text = document.getElementById("to-change");
	text.innerHTML = counter;
}

document.addEventListener("keypress", handleInput);
