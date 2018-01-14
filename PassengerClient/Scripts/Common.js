
$(document).ready(function () {
    $(".form-control").bind("change", function () {
        Common.ClearMessage();
    });
});


Common = {

    TimeSpan: 500,

    ClearMessage: function () {

        $("#resultMessage").empty();
        $("#resultMessage").removeClass("error");
        $("#resultMessage").removeClass("success");
        $("#resultMessage").hide();
    },

    AddMessage: function (message, className) {

        $("#resultMessage").text(message);
        $("#resultMessage").addClass(className);
        $("#resultMessage").show(Common.TimeSpan);
    }
}