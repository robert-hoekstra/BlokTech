let boardSize = 16;
let boardColor = "";

for (let y = 0; y < boardSize; y += 1){
	for (let x = 0; x < boardSize; x += 1){
		if ((x+y) %2 == 0){
			boardColor += " ";

        }else{
			boardColor += "#";
    	}
	}
	boardColor += "\n";
}
console.log(boardColor)