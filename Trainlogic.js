var config = {
    apiKey: "AIzaSyAeVV2oI754DqgRt6Y59OxAjNarBOSnYBQ",
    authDomain: "pope1988-9053f.firebaseapp.com",
    databaseURL: "https://pope1988-9053f.firebaseio.com",
    projectId: "pope1988-9053f",
    storageBucket: "pope1988-9053f.appspot.com",
    messagingSenderId: "159930424255"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// declaring you variables for the inputs

var TrainName = "";
var TrainTime = 0;
var TrainDestination = "";
var Frequency = 0;
var NextArrival = "";
var MinutesAway = 0;
console.log('javascript is working');
$("#submit").on("click", function (event) {

    event.preventDefault();

    TrainName = $("#TrainName").val().trim();
    TrainDestination = $("#destination").val().trim();
    Frequency = $("#frequency").val().trim();
    TrainTime = $("#time").val().trim();

    if (TrainName === "" || TrainDestination === "" || Frequency === "" || TrainTime === "") {
        alert("Please fill out the form");
    } else {
        database.ref().push({
            TrainName: TrainName,
            TrainDestination: TrainDestination,
            Frequency: Frequency,
            TrainTime: TrainTime,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,


        });
        alert("New Train Added");

    }

    $("#TrainName").val();
    $("#destination").val();
    $("#frequency").val();
    $("#time").val();
});

database.ref().orderByChild("dateAdded").on("child_added", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().TrainName);
    console.log(snapshot.val().TrainDestination);
    console.log(snapshot.val().Frequency);
    console.log(snapshot.val().TrainTime);

    


    var row = $("<tr>");
    var tdName = $("<td>").text(snapshot.val().TrainName);
    var tdDestination = $("<td>").text(snapshot.val().TrainDestination);
    var tdFrequency = $("<td>").text(Frequency);
    var tdNextArival = $("<td>").text(snapshot.val().NextArrival);
    var tdMinsAway = $("<td>").text(snapshot.val().MinutesAway);

    row.append(tdName, tdDestination, tdFrequency, tdNextArival, tdMinsAway);
    $("#tbody").append(row);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});  
