const button=document.getElementById('btn');
button.addEventListener('click',addGUEST);


function addGUEST(event){
 event.preventDefault();

  
  const guestNameInput=document.getElementById('guest-name');
  const guestlist=document.getElementById('guest-list');
  const ListNames=document.getElementById('list');

  
  const name=guestNameInput.value;
  if(name===""){
   ListNames.textContent="please enter guest name!";
   
    return;

  }else{
    ListNames.textContent="";
  }
   
  
  if(guestlist.children.length >= 10){
    alert("Guest list is full!");
    return;
  }
  
   console.log(name);

  
  const Li=document.createElement('li'); 
  Li.textContent=name + "";
  
  const deleteBtn=document.createElement('button');
  deleteBtn.textContent="Remove";

  deleteBtn.addEventListener('click',()=>{
  guestlist.removeChild(Li); 
  })
  
  Li.appendChild(deleteBtn);
  guestlist.appendChild(Li);
  guestNameInput.value="";

  
 
  }