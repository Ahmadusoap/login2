function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		if(uname =='')
		{
			alert("Please enter a username.");
		}
		else if(pwd=='')
		{
        	alert("Please enter a password");
		}
		else if(!filter.test(uname))
		{
			alert("Please enter a valid username. (Need to include atleast ONE uppercase, lowercase, number and symbol)");
		}
		else if(pwd.length < 12)
		{
			alert("Password min length is 12.");
		}
		else
		{
	alert('Successful Login!');
		}
	}
    
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}