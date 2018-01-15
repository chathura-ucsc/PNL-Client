Get = {

    /*
    This will display the data to the UI
    */
    DisplayJsonData: function (data) {

        Common.ClearMessage();

        if (data.length == 0) {
            Common.AddMessage("There is no record associated with the given name/name part.", "success");
        }
        else {
            var displayData = "<ol>";
            for (var i = 0; i < data.length; i++) {
                displayData += "<li>" + data[i].Name;
                var innerData = "<ul>";
                for (var j = 0; j < data[i].Passengers.length; j++) {
                    innerData += "<li>" + data[i].Passengers[j].Title + " " + data[i].Passengers[j].FirstName + " " + data[i].Passengers[j].LastName + "</li>";

                }
                innerData += "</ul>";
                displayData += innerData + "</li>";
            }

            displayData += "</ol>";

            $("#resultMessage").append(displayData);
            $("#resultMessage").addClass("success");
            $("#resultMessage").show(Common.TimeSpan);
        }



    },
    /*
    This will search the passengers by there name
    */
    SearchByPassenger: function () {

        Common.ClearMessage();

        var name = $("#name").val();

        if (name == "") {
            Common.AddMessage("Please enter at-least one letter of the name.", "error");

            return;
        }
        else if (!/^[a-zA-Z]+$/.test(name)) {
            Common.AddMessage("You opted to search by Passenger name. Passenger name should only contain letters.", "error");

            return;
        }

        //if there is not any error, we continue
        // we call the get api method to get passenger records

        $.ajax({
            url: "http://localhost:52945/api/Passenger/" + name,
            method: "get",
            dataType: "json"
        }).done(function (data) {
            
            Get.DisplayJsonData(data);

        }).fail(function (xhr, status, ex) {

            Common.AddMessage(ex.Message, "error")
        });
    },

    /*
     This will search by locator
    */
    SearchByLocator: function () {

        Common.ClearMessage();

        var name = $("#name").val();

        if (name == "") {
            Common.AddMessage("Please enter at-least one character of the name.", "error");

            return;
        }
        else if (name.length > 6) {
            Common.AddMessage("You opted to search by Locator name. Locator name should not exceed six (6) characters.", "error");

            return;
        }

        //if there is not any error, we continue
        // we call the get api method to get passenger records

        $.ajax({
            url: "http://localhost:52945/api/Locator/" + name,
            method: "get",
            dataType: "json"
        }).done(function (data) {

            Get.DisplayJsonData(data);

        }).fail(function (xhr, status, ex) {

            Common.AddMessage(ex.Message, "error");
        });
    }
}