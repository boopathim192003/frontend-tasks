let stlist=document.getElementById('student-list');
let submitbtn=document.getElementById('submit-btn');
let selectval=document.getElementById('select-val');

let s1={
    sid:1,
    sname:"Boopathi",
    marks:[93,54,78,78,87],
    gender:'M'
}
let s2={
    sid:2,
    sname:"Aarav",
    marks:[93,65,78,78,87],
    gender:'M'
}
let s3={
    sid:3,
    sname:"Anitha",
    marks:[93,34,78,78,87],
    gender:'F'
}
let s4={
    sid:4,
    sname:"Aarthi",
    marks:[93,30,78,78,87],
    gender:'F'
}
let s5={
    sid:5,
    sname:"Sachin",
    marks:[93,90,76,78,87],
    gender:'M'
}

let students=[s1,s2,s3,s4,s5];

function displayStudents(students)
{
    let htmlCode="";
    students.forEach(student => {
        htmlCode+=          `<tr>
                                <td>${student.sid}</td>
                                <td>${student.sname}</td>
                                <td>${student.marks}</td>
                                <td>${student.gender}</td>
                            </tr>`
    });
    stlist.innerHTML=htmlCode;
}
displayStudents(students);

submitbtn.addEventListener('click',function(){
    if(selectval.value=='All'){
        displayStudents(students);
    }
    if(selectval.value=='Male')
    {
        let m=students.filter((s)=>s.gender=='M')//when using arrow function and returning any values in a
        //  single statement we should not use curly braces.
        displayStudents(m);
    }
    if(selectval.value=='Female')
    {
        let f=students.filter((s)=>s.gender=='F')
        displayStudents(f);
    }
    if(selectval.value=='Pass')
    {
        let p=passStudents(students);
        displayStudents(p);
    }
    if(selectval.value=='Fail')
        {
            let f=failStudents(students);
            displayStudents(f);
        }
})

function passStudents(students)
{
    let pass=students.filter(s=>s.marks.every(m=>m>=35))
    return pass;
}
function failStudents(students)
{
    let fail=students.filter(s=>s.marks.some(m=>m<35))
    return fail;
}

