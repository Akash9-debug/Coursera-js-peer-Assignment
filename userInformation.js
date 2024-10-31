document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const feedback = document.getElementById('feedback').value;

    const feedbackDisplay = document.getElementById('feedbackDisplay');
    feedbackDisplay.innerHTML += `<h3>Submitted Feedback:</h3>
                                   <p>Name: ${name}</p>
                                   <p>Age: ${age}</p>
                                   <p>Email: ${email}</p>
                                   <p>Job Title: ${job}</p>
                                   <p>Feedback: ${feedback}</p>
                                   <hr>`;
    
    // Clear the form fields
    document.getElementById('userInfoForm').reset();
});
