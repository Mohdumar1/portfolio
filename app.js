const form = document.getElementById("contact-form");

function sendEmail(){
    var params = {
        from_name : document.getElementById('fullName').value,
        email_id : document.getElementById('email-id').value,
        message : document.getElementById("message").value
        }
        emailjs.send("service_n6k1t4l", "template_vx55t8l", params).then(function(res){alert("Messages Sended " + res.status )})
        form.reset()

}

