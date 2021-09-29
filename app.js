// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');

const buttonOrange = document.getElementById('button-orange');
const buttonGreen = document.getElementById('button-green');
const buttonPink = document.getElementById('button-pink');





// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
  });

buttonOrange.addEventListener('click', ()=>{
header.style.backgroundColor = 'orange';
footer.style.backgroundColor = 'orange';
})

buttonGreen.addEventListener('click', ()=>{
header.style.backgroundColor = 'green';
footer.style.backgroundColor = 'green';
  })

buttonPink.addEventListener('click', ()=>{
header.style.backgroundColor = 'pink';
footer.style.backgroundColor = 'pink';
      })