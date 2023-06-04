document.getElementById("legoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user input values
    var setNumber = document.getElementById("setNumber").value;
    var description = document.getElementById("description").value;

    // Make an API call to submit the form data and generate the 3D model
    // You'll need to implement this part on the server-side

    // Clear the form fields
    document.getElementById("setNumber").value = "";
    document.getElementById("description").value = "";
});
