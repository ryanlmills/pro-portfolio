$(document).ready(function () {
  /**
   * Author attribution cut and paste
   */

  $("#contact").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",

    rules: {
      name: {
        required: true
      },
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxlength:2000,
        }
      },
    messages: {
      name: {
        required: "Please enter your name&#46;"
      },
      email: {
        required: "Please enter your email address&#46;",
        email: "Invalid email"
      },
      message: {required: "Message is required&#46;",
        maxlength: "Message length exceeds maximum&#46;"
      }
    },

    submitHandler: function (form) {
      $("#contact").contact.ajaxSubmit({
        type: "POST",
        url: $("contact").attr("action"),
        success: function (ajaxOutput) {
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)

          if($(".alert-success").length >= 1) {
            $("#contact")[0].reset();
          }
        }
      })
    }
  })
})