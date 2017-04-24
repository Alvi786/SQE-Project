window.onload=function(){

	var change=document.getElementById("btn");
	change.addEventListener('click',changecolor,false);
	
	var check=document.getElementById("name");
	check.addEventListener('keypress',validate_name,false);
	
	var checkemail=document.getElementById("btn");
	checkemail.addEventListener('click',validateEmail,false);
	
	var password=document.getElementById("pass1");
	password.addEventListener('keyup',checkPass,false);
	
	var repassword=document.getElementById("pass2");
	repassword.addEventListener('ketyup',checkPass,false);
	
	var password1=document.getElementById("pass1");
	password1.addEventListener('keypress',validate_password,false);
	
	var repassword2=document.getElementById("pass2");
	repassword2.addEventListener('keypress',validate_password,false);

};
function changecolor(color) {
	var color=document.getElementById('color');
  document.getElementsByTagName('body')[0].style.backgroundColor=color.value;
}
function validateEmail(){

    var email = document.getElementById("Email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    email.style.backgroundColor="#66cc66";
    return false;
    
 	}

};
function DateSelected(){ 
      var today =new Date();
      var inputDate = new Date(document.getElementById("date").value);
      var message = document.getElementById('Message')
      if (inputDate== ""){
          return false;
          
      } else if (inputDate > today) {
          return false;
          
      } else {
          
          message.innerHTML = "Date is valid!";
           
      }
      if (DateSelected() == false) {
      alert("Please enter a valid birthday");
      return false;
  } else {
      return true;
  }
};
function validate_password(e){
	var code=e.charCode;

	if(code >= 97 && code <= 122 || code >= 65 && code <= 90 || code== 45|| code >= 48 && code <= 57 || code==95 ){
		return true;
  }

	else{
		return false;
  }
	
};
function validate_name(e){
	var code=e.charCode;
	if(code >= 97 && code <= 122 || code >= 65 && code <= 90 ){
		return true;
  }
  else{
    return false;
  }

};



function validate_number(e){
	var code=e.charCode;
	if(code >= 48 && code <= 57 || code==46){
		return true;
  }
	else{
		return false;
  }
};




function checkPass()
{

    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('confirmMessage');
    var match = "#66cc66";
    var wrong= "#ff6666";

   
    if(pass1.value == pass2.value){
        
        message.innerHTML = "Passwords Match!"
        pass2.style.backgroundColor =match;
        message.style.color = match;
    }else{
      	
      	pass2.style.backgroundColor =wrong;
        message.style.color = wrong;
       message.innerHTML = "Passwords Do Not Match!"
    }
};
