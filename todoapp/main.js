let textInput=document.querySelector(".todo-input .input_text");
let inputCheckBtn=document.querySelector(".todo-input .todo-check");
let inputTrashBtn=document.querySelector(".todo-input .todo-trash");
let todolist=document.querySelector(".todo-list");
let unordered_list=document.querySelector(".todo-list ul");
let work=document.querySelector(".works")
let number_work=0;
inputCheckBtn.addEventListener('click',function() {
 
    let icon_1=document.createElement('i');
    let icon_2=document.createElement('i');
    icon_1.classList.add("fa-solid");
    icon_1.classList.add("fa-check");
    icon_2.classList.add("fa-sharp");
    icon_2.classList.add("fa-solid");
    icon_2.classList.add("fa-trash");
    let but_1=document.createElement('button');
    let but_2=document.createElement('button');
    but_1.classList.add("todo-checked");
    but_2.classList.add("todo-deleted");
    but_1.appendChild(icon_1);
    but_2.appendChild(icon_2);
    let division =document.createElement('div');
    division.classList.add("todo-content");
    division.innerHTML=textInput.value;
    let listnode=document.createElement('li');
    listnode.appendChild(division);
    listnode.appendChild(but_1);
    listnode.appendChild(but_2);
    unordered_list.appendChild(listnode);
    textInput.value='';
    number_work++;
    
    but_1.addEventListener('click',function() {
        division.classList.add("checked");
        /*number_work=number_work-1;
        work.innerHTML="you have "+number_work+ " works to do" ;*/
    });
    but_2.addEventListener('click',function(){
        listnode.classList.add("deleted");
        setTimeout(function(){
            
            listnode.remove();
        },400);
        number_work=number_work-1;
        if(number_work===0){
            work.innerHTML="good job!!!...\n you've finished your tasks";
        }else {
            work.innerHTML="you have "+number_work+ " works to do" ;
        }
        
    });
    if(number_work===0){
        work.innerHTML="good job you've finished you tasks";
    }else {
        work.innerHTML="you have "+number_work+ " works to do" ;
    }
    
    


    
});
inputTrashBtn.addEventListener('click',function(){
    textInput.value='';
});


