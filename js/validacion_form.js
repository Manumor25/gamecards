$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        text : {
          required: true,
          minlength: 3
        },
        
        pasword: {
            required: true,
            minlength: 3
        },
        
      },
      messages : {
        text: {
          minlength: "Name should be at least 3 characters"
        },
        
        pasword: {
            required: "Ingrese titulo mensaje",
            minlength: "Largo min 3 caracteres"
        },
       
      }
    });
  });