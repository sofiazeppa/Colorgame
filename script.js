const square = $(".square")
const message = $("#message")
const h1 = $("h1")
const mainButton = $("#reset")
let numberOfSquares = 6
let color = []
let pickedColor 

$(document).ready(function() {
	setSquares()
	setDif()
	setGame()
})

mainButton.on("click", function() {
	setGame()
})

function setGame() {
	const colorDisplay = $("#colorDisplay")
	color = generateRandomColor(numberOfSquares)
	pickedColor = pickColor()
	colorDisplay.html(pickedColor)

	placeColors()

	message.html("")
	mainButton.html("Colores nuevos")
	h1.css("background-color", "")
}

function setSquares() {
	for (var i = 0 ; i < square.length ; i++) {
		square.eq(i).css("background-color", color[i])
		square.on("click", function() {
			let clickedColor
			clickedColor = $(this).css("background-color")
			if (clickedColor === pickedColor) {
				changeColors(clickedColor)
				h1.css("background-color", clickedColor)
				message.html("Ganaste!")
				mainButton.html("Jugar otra vez")
			} else {
				$(this).css("background-color", "#232323")
				message.html("Intenta otra vez")
			}
		})
	}
}

function changeColors(color) {
	for (let i = 0 ; i < square.length ; i++) {
		square.eq(i).css("background-color", color)
	}	
}

function pickColor() {
	let random = Math.floor(Math.random() * color.length)
	return color[random]
}

function randomColor() {
	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)
	return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColor(num) {
	let array = []
	for (let i = 0 ; i < num ; i++) {
		array[i] = randomColor()
	}
	return array
}

function setDif() {
	const dif = $(".dif")
	dif.on("click", function() {
		dif.removeClass("selected")
		$(this).addClass("selected")
		numberOfSquares = ( $(this).attr("id") == "easy" )?3:6
		setGame()
	})	
}

function placeColors() {
	for (let i = 0 ; i < $(".square").length ; i++) {
		if (color[i]) {
			$(".square").eq(i).css("backgroundColor", color[i])
			$(".square").eq(i).css("display", "flex")
		} else {
			$(".square").eq(i).css("display", "none")
		}
	}
}






