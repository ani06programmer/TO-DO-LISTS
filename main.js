//Selectors
var todoInput = document.querySelector('.list-input');
var todoBtn = document.querySelector('#subBtn')
var todoList = document.querySelector('.list-items');
var filterOption = document.querySelector('.filter-todo');
// console.log("list",todoList)





//Event Listeners
todoBtn.addEventListener('click', addList);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('change', filterList);





//function

function addList(e){
    e.preventDefault();
    
    
    
    // function errorMsg(){
    //     if(todoList.innerHTML==""){
    //         alert("Please type your to do !");
    //     }
    // }
    
    // errorMsg();
    

    

    let value = todoInput.value;
    if(value){
            //create div in ul
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // todoDiv.classList.add('animate');
        todoList.appendChild(todoDiv);
        

        // Create list in the div

        const todoItem = document.createElement('li');
        todoItem.classList.add('item');
        todoItem.innerHTML= todoInput.value;
        // todoDiv.appendChild(todoItem);
        todoDiv.appendChild(todoItem);

        


        // create completed button 

        const comBtn = document.createElement('button');
        comBtn.innerHTML = '<i class = "fas fa-check"></i>';
        comBtn.classList.add('complete-btn');
        todoDiv.appendChild(comBtn);

        // create delete button 

        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class = "fas fa-trash"></i>';
        delBtn.classList.add('delete-btn');
        todoDiv.appendChild(delBtn);


        // Attach this div to the ul
        todoList.appendChild(todoDiv);

        //clear the input 
        todoInput.value="";

        }else {
            alert('Please type your to do ! ')
        }

}

// Deleting a list 
function deleteCheck(e){
    e.preventDefault();
    const item = e.target;

    if(item.classList[0]==='delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        setInterval(function(){
            todo.remove();
        },400);
        
    }

    // Check Mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

// For filterList 

function filterList(e){
    
    // e.preventDefault();

    const todos = todoList.childNodes;
    // console.log(todos);
    // console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                // console.log("okay done !")
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display= "flex";

                }else{
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display= "flex";

                }else{
                    todo.style.display = "none";
                }
                break ;  


        }
    });



}

