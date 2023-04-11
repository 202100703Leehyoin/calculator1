let output = document.querySelector(".output");
let history = document.querySelector(".history");
let buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		let buttonValue = this.innerHTML;
		if (buttonValue == "AC") {
			output.innerHTML = "0";
			history.innerHTML = "";
		}
		else if (buttonValue == "+/-") {
			output.innerHTML = eval("-1 * " + output.innerHTML);
		}
		else if (buttonValue == "%") {
			output.innerHTML = eval(output.innerHTML + "/100");
		}
		else if (buttonValue == "=") {
			history.innerHTML = output.innerHTML;
			output.innerHTML = eval(output.innerHTML);
		}
		else {
			if (output.innerHTML == "0") {
				output.innerHTML = buttonValue;
			}
			else {
				output.innerHTML += buttonValue;
			}
		}
	});
}
