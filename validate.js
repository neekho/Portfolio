function Validate(txt) {
    // validates text only
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}



function email_validate(email) {
    // email address
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (!regMail.test(email)) 
        document.getElementById("status").innerHTML    = "<span class='warning'>Invalid Email</span>";
    

}