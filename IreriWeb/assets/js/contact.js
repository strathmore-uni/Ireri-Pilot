import { appendFile } from 'fs';


document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('comment').value;

  // Prepare the data to be written to the file
  let data = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n\n`;

  // Write the data to a text file
  appendFile('ContactForm.txt', data, (err) => {
    if (err) throw err;
    console.log('The message was appended to file!');
  });
});
