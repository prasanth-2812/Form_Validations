function myfunction()
        {
            document.querySelectorAll(".warning").forEach(el => el.remove());
            function ErrorMsg(element, message) {
        element.style.border = "1px solid red";
        var warning = document.createElement("p");
        warning.style.color = "red";
        warning.className = "warning";
        warning.innerText = message;
        element.insertAdjacentElement('afterend',warning);
    }
    
            

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var dob = document.getElementById("dob");
    var gender = document.getElementsByName("gender");
    var email = document.getElementById("email");
    var email2 = document.getElementById("alt_email");
    var phone = document.getElementById("phone");
    var phone2 = document.getElementById("alt_phone");
    var presentAddress = document.getElementById("present_address");
    var permanentAddress = document.getElementById("permanent_address");
    var qualification = document.getElementById("qualification");
    var marks = document.getElementById("marks");
    var course = document.getElementById("course");
    var photo = document.getElementById("photo");
    var sign = document.getElementById("sign");
    var markssheet = document.getElementById("marksheet");
    var IdProof = document.getElementById("id_proof");
    var checkbox = document.getElementById("checkbox");
    var pincode = document.getElementById("pincode");
    var pincode2 = document.getElementById("pincode2");

    if (fname.value==="" || !/^[a-zA-Z\s]{3,}$/.test(fname.value)) {
     ErrorMsg(fname,"Please Enter valid first Name!")
    }
      
    
    if (lname.value==="" || !/^[a-zA-Z\s]{3,}$/.test(lname.value)){
     ErrorMsg(lname,"Please Enter Valid last name!")
        }
   
    
    if (dob.value===""){
     ErrorMsg(dob,"please Enter Your DOB In Valid formate")
    }

   var selected = false;
   for(var i=0; i<gender.length; i++){
    if(gender[i].checked){
        selected = true;
        break;
    }
   }
   if(!selected){
        ErrorMsg(document.querySelector('.gender'), "please select your gender");
    }


    if (email.value==="" || !/^\S+@\S+\.\S+$/.test(email.value)) {
     ErrorMsg(email,"Please Enter Valid email...!")
        }
    if (email2.value==="" ) {
        
    }
    else if(!/^\S+@\S+\.\S+$/.test(email2.value)){
        ErrorMsg(email2,"Please Enter Valid email...!")
    }
   
    if (phone.value==="" || !/^\d{10}$/.test(phone.value)) {
     ErrorMsg(phone,"Please Enter 10 Digit Mobile Number!")
        }
    if (phone2.value==="") {
       
    }
    else if(!/^\d{10}$/.test(phone2.value)){
        ErrorMsg(phone2,"Please Enter 10 Digit Mobile Number!")
    }

    if (presentAddress.value===""){
     ErrorMsg(presentAddress,"Please Enter Your Present Address!")
    }

    if(permanentAddress.value===""){
     ErrorMsg(permanentAddress,"Please Enter Your Permanent Address!")
    }

    if (qualification.value===""){
        ErrorMsg(qualification,"please Enter Your Qualification")
    }
    if (marks.value==="" || !/^\d{2}$/.test(marks.value)) {
        ErrorMsg(marks,"please Enter Your marks/percentage")
    }
    if(course.value===""){
        ErrorMsg(course,"Please Choose The Course!")
    }
    if(photo.value==="")
    {
        ErrorMsg(photo,"Please Upload Your Photograph")
    }
    if(sign.value==="")
    {
        ErrorMsg(sign,"please Upload Your Signature")
    }
    if(markssheet.value===""){
        ErrorMsg(markssheet,"Please Upload Your Marksheet")
    }
    if(IdProof.value===""){
        ErrorMsg(IdProof,"Please Upload Your ID Proof")
    }
    if(!checkbox.checked){
        ErrorMsg(checkbox,"Please Accept Terms & Conditions")
    }
    if (pincode.value==="" || !/^\d{6}$/.test(pincode.value)) {
        ErrorMsg(pincode,"Please Enter Valid Pincode!")
    }
    if (pincode2.value==="" || !/^\d{6}$/.test(pincode2.value)) {
        ErrorMsg(pincode2,"Please Enter Valid Pincode!")
    }
        }