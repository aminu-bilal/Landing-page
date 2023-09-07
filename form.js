
const Form = document.querySelectorAll('#my_form');
const msg = document.querySelector('.msg');
const Firstname = document.querySelector('#Firstname');
const Lastname = document.querySelector('#Lastname');
const Mail = document.querySelector('#Mail');
const Position = document.querySelector('#Position');
const Exprience = document.querySelector('#Exprience');
const worktype = document.querySelector('.worktype');
const Gender = document.querySelector('.gender');
const DOB = document.querySelector('#DOB');
const Address = document.querySelector('#Address');
const BTN = document.querySelector('.btn');
const userList = document.querySelector('#user');

// Form.addEventListener('btn', BTN) 
// function prevent(){
//     e.preventDefault();
// }
// BTN.addEventListener('click', prevent)
BTN.addEventListener('click', (e) => {

    e.preventDefault();
    //creating an alert massage with if statement and make it display none after 3 seconds
    if(Firstname.value === '' || Lastname.value === '' || Mail.value === '' || Position.value === '' || Exprience.value === '' || worktype.value === '' || Gender.value === '' || DOB.value === '' || Address.value === '') {

        msg.innerHTML = 'please fill in the fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        //creating an element to pass the obtained informations into
        const li = document.createElement('li');
        //adding a class to the li element
        li.classList.add('new');
        //passing the obtain informations to the DOM
        li.appendChild(document.createTextNode(`${Firstname.value} : ${Lastname.value} : ${Mail.value} :
        ${Position.value} : ${Exprience.value} : ${worktype.value} : ${Gender.value} : ${DOB.value} :
        ${ Address.value}`));
        //putting the element li into a ul named userList
        userList.appendChild(li)
        //clear fields
        Firstname.value = '';
        Lastname.value = '';
        Mail.value = '';
        Position.value = '';
        Exprience.value = '';
        worktype.value = '';
        Gender.value = '';
        DOB.value = '';
        Address.value = '';
    }
});