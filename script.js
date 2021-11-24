function count(){
	for(i=99;i>=3;i=i-1){
		document.getElementById("main").innerHTML+="<br/>"+i+" bottles of beer on the wall "+i+" bottles of beer,";
		document.getElementById("main").innerHTML+="<br/>"
		document.getElementById("main").innerHTML+="You take one down pass it around, "+(i-1)+" bottles of beer on the wall ";
		document.getElementById("main").innerHTML+="<br/>"
	}
		if(i==2){
			document.getElementById("main").innerHTML+="<br/>"
			document.getElementById("main").innerHTML+="You take one down pass it around, "+(i-1)+" bottle of beer on the wall ";
		    document.getElementById("main").innerHTML+="<br/>"
		}
		else if(i==1){
			document.getElementById("main").innerHTML+="<br/>"
			document.getElementById("main").innerHTML+="Yyyyyou take one down pass it around, "+(i-1)+" bottle of beer on the wall ";
		    document.getElementById("main").innerHTML+="<br/>"
		}
}