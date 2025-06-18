function addGUEST(event){
 event.preventDefault();

  
  const guestNameInput=document.getElementById('guest-name');
  const guestlist=document.getElementById('guest-list');
  const GuestNames=document.getElementById('list');

  
  const name=guestNameInput.value;
  if(name===""){
   GuestNamesNames.textContent="please enter guest name!";
   
    return;

  }else{
    GuestNames.textContent="";
  }
   
  
  if(guestlist.children.length >= 10){
    alert("Guest list is full!");
    return;
  }
  
   console.log(name);

  
  const List=document.createElement('li'); 
  List.textContent=name + "";
  
  const deleteBtn=document.createElement('button');
  deleteBtn.textContent="Remove";

  deleteBtn.addEventListener('click',()=>{
  guestlist.removeChild(List); 
  })
  
  List.appendChild(deleteBtn);
  guestlist.appendChild(List);
  guestNameInput.value="";

  }
const button=document.getElementById('btn');
button.addEventListener('click',addGUEST); 


 


