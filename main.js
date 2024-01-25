document.getElementById('generator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    
    // Your logic here to generate followers
    // ...
    
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your followers have been generated!';
  });