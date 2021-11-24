function subjects(){
	var numSubjects=parseInt(document.getElementById("formNumSubjects").value);
	var result=0;
	for(i=0;i<numSubjects;i++){
		let result = prompt("Please enter your result in subject "+(i+1));
		document.getElementById("main").innerHTML+="<br /> Your result in subject "+(i+1)+" was "+result+" %";

	}	
	
}