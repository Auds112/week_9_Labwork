function count(){
	for(i=99;i>=3;i=i-1){
		document.getElementById("main").innerHTML+="<br/>"+i+" bottles of beer on the wall "+i+" bottles of beer,";
		document.getElementById("main").innerHTML+="<br/>"
		document.getElementById("main").innerHTML+="You take one down pass it around, "+(i-1)+" bottles of beer on the wall ";
		document.getElementById("main").innerHTML+="<br/>"
	}
		document.getElementById("main").innerHTML+="<br />"+"2 bottles of beer on the wall, 2 bottles of beer";
		document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, 1 bottle of beer on the wall";
		document.getElementById("main").innerHTML+="<br/>"
		document.getElementById("main").innerHTML+="<br />"+"1 bottle of beer on the wall, 1 bottle of beer";
		document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, no more bottles of beer on the wall";
		document.getElementById("main").innerHTML+="<br/>"
		document.getElementById("main").innerHTML+="<br/>"
		document.getElementById("main").innerHTML+="<br />"+"You've had enough now.. GO HOME!!";
}