

Post = {
    
    /*
    This will call the web api to add the passenger info
    */
    AddPassenger: function () {

        Common.ClearMessage();

        var collectedValues = Post.CollectInfo();

        var errorMessages = Post.ValidateInfo(collectedValues);

        if (errorMessages.length > 0) {

            var errorList = "<ul>";
            for (var i = 0; i < errorMessages.length; i++) {

                errorList += ("<li>" + errorMessages[i] + "</li>");
            }
            errorList += "</ul>";

            $("#resultMessage").append(errorList);
            $("#resultMessage").addClass("error");
            $("#resultMessage").show(Common.TimeSpan);
            return;
        }
        //if there is not any error, we continue
        // we call the post api method to add the record
        debugger;
        $.ajax({
            url: "http://localhost:52945/api/Passenger",
            data: JSON.stringify(collectedValues),
            contentType: "application/json; charset=utf-8",
            method: "post"
        }).done(function () {

            Common.AddMessage("Passenger record is added successfully.", "success");

        }).fail(function (xhr, status, ex) {

            Common.AddMessage(ex.Message, "error");
        });


    },
    /*
    This will collect the passenger info from the user inputs
    */
    CollectInfo: function () {
        var info = {
            Title: $('#title').val(),
            FirstName: $('#firstName').val(),
            LastName: $('#lastName').val(),
            LocatorName: $('#recordLocator').val()
        };

        return info;
    },

    /*
    This will validate the user inputs before calling the web api
    */
    ValidateInfo: function (passengerInfo) {

        var errorMessage = new Array();

        if (passengerInfo.Title != "MRS" && passengerInfo.Title != "MR") {
            errorMessage.push("Please select a Title for the passenger.");
        }

        if (passengerInfo.FirstName == "") {
            errorMessage.push("Please enter the First Name of the Passenger.");
        }
        else if (!/^[a-zA-Z]+$/.test(passengerInfo.FirstName)) {
            errorMessage.push("Please enter only the letters for the First Name.");
        }

        if (passengerInfo.LastName == "") {
            errorMessage.push("Please enter the Last Name of the Passenger.");
        }
        else if (!/^[a-zA-Z]+$/.test(passengerInfo.LastName)) {
            errorMessage.push("Please enter only the letters for the Last Name.");
        }

        if (passengerInfo.LocatorName == "") {
            errorMessage.push("Please enter the Resource Locator of the Passenger.");
        }
        else if (passengerInfo.LocatorName.length != 6) {
            errorMessage.push("Length of the Resource Locator should be six(6).");
        }

        return errorMessage;
    }
}