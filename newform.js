
const myForm = document.querySelector('#my_form');
const Name = document.querySelector('#name');
const eMail = document.querySelector('#mail');
const msg = document.querySelector('.msg');
const Userlist = document.querySelector('#users');
const btn = document.querySelector('.btn');
myForm.addEventListener('submit', btn)

btn.addEventListener('click', (e) =>{
    e.preventDefault();
   
    if(Name.value === '' || eMail.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.classList.add('list')
        li.appendChild(document.createTextNode(`${Name.value} : ${eMail.value}`));

        Userlist.appendChild(li);

        //clear fields
        Name.value = '';
        eMail.value = '';
    }
});