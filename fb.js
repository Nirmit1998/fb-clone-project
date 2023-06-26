function validate()
{
	var uname=document.getElementById("uname");
	var pword=document.getElementById("pword");
	
	if(uname.value.trim()=="")
	{
		alert("Please enter email Id or contact no.");
		uname.style.border="2px solid red";
		return false;
	}
	
	else if(pword.value.trim()=="")
	{
		alert("Please enter password");
		pword.style.border="2px solid red";
		return false;
	}
}