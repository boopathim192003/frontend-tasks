let task=document.getElementById('tasklist-el');
let taskform=document.getElementById('task-form');
let newtask=document.getElementById('new-task');

let items=[];


function displayTask(items)
{
    let htmlCode="";
    if(items.length==0){
        task.innerText='Your List is Empty';
        return;
    }

    items.forEach((item,i) => {
        htmlCode+=`<li class="list-group-item mb-3">
        <span>${item}</span>
        <button class="btn float-end" onclick="deleteTask(${i})"><i class="bi bi-archive-fill">
        </i></button>
        <button class="btn float-end" onclick="updateTask(${i})"><i class="bi bi-pen-fill">
        </i></button>
        </li>`;
    });
    task.innerHTML=htmlCode;
}
displayTask(items);

taskform.addEventListener('submit',function(e){
    e.preventDefault();
    let data=newtask.value;
    items.unshift(data);
    displayTask(items);
    newtask.value="";
})
function updateTask(index)
{
    newtask.value=items[index];
    items.splice(index,1);
    displayTask(items);
}
function deleteTask(index)
{
items.splice(index,1);
displayTask(items);
}