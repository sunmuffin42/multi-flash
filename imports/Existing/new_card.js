function makeDataInput(num_sides){
	for (var i = 1; i <= num_sides; i++) {
		document.getElementById('row').innerHTML += `<td><input type="text" placeholder="Attribute ${i} name" name="${i}" id="${i}"> </td>`
	}
	document.getElementById('row').innerHTML += `<button id="make_row" onclick="makeRow(getNames())">Let's get started!</button>`

}

function getNames(){
	atts = []
	for (var i = 1; i <= document.getElementById('sides').value; i++) {
		atts.push(document.getElementById(`${i}`).value)
	}
	return atts
}

var a = 1

function makeRow(atts){
	document.getElementById('data').innerHTML += `<ul id = "row_${a}"">`
	for (var i = 0; i < atts.length; i++) {
		 document.getElementById('data').innerHTML += `<li><input type="text" placeholder="${atts[i]}" name="${i}" id="data_${i}"> </li>`
	}
	document.getElementById('data').innerHTML += `<li> <button id="make_row" onclick="makeRow(atts)">Add another row</button> </li>`
	document.getElementById('data').innerHTML += `</ul>`
	a += 1
}

