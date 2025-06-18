const button=document.getElementById('btn');// calling the id of add button
button.addEventListener('click',addGUEST);


function addGUEST(event){
 event.preventDefault();

  // getting elements by id
  const guestNameInput=document.getElementById('guest-name');
  const guestlist=document.getElementById('guest-list');
  const ListNames=document.getElementById('list');

  // add text in the input
  const name=guestNameInput.value;
  if(name===""){
   ListNames.textContent="please enter guest name!";
   
    return;

  }else{
    ListNames.textContent="";
  }
   // limiting the name of guests
  
  if(guestlist.children.length >= 10){
    alert("Guest list is full!");
    return;
  }
  // to print names in the console
   console.log(name);

  // creating a list for ul
  const Li=document.createElement('li'); // adding a new element
  Li.textContent=name + "";
  // to create the delete button and enable to remove name
  const deleteBtn=document.createElement('button');
  deleteBtn.textContent="Remove";

  deleteBtn.addEventListener('click',()=>{
  guestlist.removeChild(Li); 
  })
  // enable output to the brower
  Li.appendChild(deleteBtn);
  guestlist.appendChild(Li);
  guestNameInput.value="";

  
 
  }