function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const form_data = event.target.elements.myBox.value
    // Your form handling code here
    // For example, you can access form data using event.target.elements
  
    const sent_data = {sent_data: form_data }
    console.log(sent_data);
    //Clearing Field
    //Sending Data to API
    axios.post('https://double-3nmx.onrender.com/db',sent_data )
  .then(response => {
    
    const result = response.data.res
    
    const outputElementInnerHTML = document.getElementById("output").innerHTML = result
    
  })
  .catch(error => {
    console.error(error);
  });
    ///
    event.target.reset();
}


