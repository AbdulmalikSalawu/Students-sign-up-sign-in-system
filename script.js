var allStudent = []
if(localStorage.studentDetails){
    allStudent = JSON.parse(localStorage.getItem("studentDetails"))
}
function mySignUp(){ 
    let regexForEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
    let regexForName = /^[\w]{1,}$/
    let regexForPassword = /^[\d]{4,}$ /
    var ourStudent = {
        firstName:firstname.value, lastName:lastname.value, Email:email.value, Password:password.value 
    }
    // console.log(allStudent)
    if((firstName = firstname.value) && (lastName = lastname.value) && (Email = email.value) && (Password = password.value) && (regexForEmail.test(email.value)== true) && (regexForName.test(firstname.value)==true)){
        window.location.href = "login.html", 
        allStudent.push(ourStudent), 
        firstname.value ="", 
        lastname.value = "", 
        email.value = "", 
        password.value = ""
    }
    // if(regexForName.test(firstname.value )== false){
    //     validateName.innerHTML = "type a correct name!"
    // }
    // if(regexForName.test(lastname.value)==false){
    //     validateName2.innerHTML ="lastname is incorrect!"
    // }
    if(regexForEmail.test(email.value)== false){
        validateEmail.innerHTML = "input the right email!"
    }
    if(regexForPassword.test(password.value)==false){
        validatePassword.innerHTML = "password must be up to 4 digits"
    }
    // else {
    //     alert("Please fill in the form correctly")
    // }
    localStorage.setItem("studentDetails", JSON.stringify(allStudent))
}
function search(){
    //console.log (allStudent[searching.value])
    var confirmSearch = searching.value
    var randomNumber = "SQI" + Math.round (Math.random()*100)
    var date = new Date()
    date.getFullYear

    var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
    if (confirmSearch = allStudent[searching.value]){
            disp.innerText = ("Hello, the student's name is " + allStudent[searching.value].firstName  + "  " + allStudent[searching.value].lastName + " with email " + allStudent[searching.value].Email + " " + "and Matric no: " + randomNumber +  " Date: " + date) 
            disp.style.color = "black"
       }
    else{
            disp.innerText = "INVALID SEARCH!"
            disp.style.color = "red"
        }
}

function userLogin(){
    var myUser = userName.value
    var myPass = userPassword.value
    var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
    var found = false
    for (let i = 0; i < allStudent.length; i++) {
        if(allStudent[i].firstName==myUser && allStudent[i].Password==myPass){
            found = true
            // alert("GOOD")
        }
    }
    if(found){
        window.location.href = "searchpage.html"
        // alert("user signed in successfully")
    }
    else {
        alert("invalid username or password")
        console.log("hello")
    }
}
    const studentPage =()=>{
        var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
        allStudent.map((_,ind)=>{
        studentName.innerHTML = `Hi, ${allStudent[ind].firstName} 😎`
    })
}
    function checkStudents(){
        window.location.href = "datatable.html"
    }

    function checkTable(){
    var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
    for (var index = 0; index < allStudent.length; index++) {
    myTable.innerHTML += `
    <tr>
         <td> ${index+1}</td>
         <td>${allStudent[index].firstName}</td>
         <td>${allStudent[index].lastName}</td>
         <td>${allStudent[index].Email}</td>
         <td>
             <button class="bg-danger text-white btn"> Delete</button>
             <button class="bg-info text-black btn"> Edit</button>
         </td> 
     </tr>`
    // console.log(allStudents[index].firstname)
 }
}


const getAllStudents = ()=>{
        myTable.innerHTML = ""
        myTable.innerHTML += `
            <tr>
                <td>S/N</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Actions</td>
            </tr>`
    allStudent.map((student, index)=>{
        //In the above expression, student represents the new name for the array.
        myTable.innerHTML +=
        `<tr>
            <td>${index}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.Email}</td>
            <td>
                <button class="bg-danger text-white btn" onclick = "deleteStudent(${index})">Delete</button>
                
                <button class="bg-info text-white btn" onclick = "editStudent(${index})">EDIT</button>
            </td>
        </tr>`
    })
}
const deleteStudent = (index)=>{
    let filteredStudent = allStudent.filter((_, ind)=>(index!=ind))
    allStudent = filteredStudent
    getAllStudents()
}

const editStudent = (index)=>{
    allStudent[index] = {
        firstName: "Ladoke",
        lastName: "Akintola",
        Email: "buhari@gmail.com",
    }
    getAllStudents()
}





// var randomNumber = "SQI" + Math.round (Math.random()*100)
// console.log(randomNumber)
// var date = new Date()
// console.log(date)

// check if all the fields are filled
// add a uniquely generated matric no
// date and time they signed up