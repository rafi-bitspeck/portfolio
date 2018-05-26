// Reference messages collection
var messagesRef = new Firebase('https://portfolio-8e44e.firebaseio.com/portfolio');
//var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // Save message
    saveMessage(name, email, message);

    // // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// // Function to get get form values
// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

// // Save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,

        email: email,

        message: message
    });
}
