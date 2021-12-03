let addtodobtn=document.getElementById('addTodo');
let todoContainer=document.getElementById("todoContainer");
let inputField =document.getElementById('inputField');

addtodobtn.addEventListener('click',function(){ 
   
   
    var paragraph = document.createElement('p');
    paragraph.innerText=inputField.value;
    paragraph.classList.add("paragraph-styling");
    todoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
        if (todoContainer.children.value==null)
        {
            alert("Completed work "+paragraph.innerText)
        }

    })

})



