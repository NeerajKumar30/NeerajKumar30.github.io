import { ListTemplate } from "./Dom/ListTemplate.js";
import { TableTemplate } from "./Dom/TableTemplate.js";
import { Basicform } from "./classes/BasicForm.js";
import { Formme } from "./classes/Formme.js";
import { Someone } from "./classes/Someone.js";
const list_form = document.querySelector('.menu');
const type = document.querySelector('#type');
const details = document.querySelector('#details');
const display_output = document.querySelector('.output-field');
list_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const setitem = details.value;
    let task;
    const listtemplate = new ListTemplate(display_output);
    if (type.value != '' && details.value != '') {
        if (type.value.toLocaleLowerCase().endsWith('me')) {
            task = new Formme(setitem);
            listtemplate.render(task, type.value, 'start');
            // console.log(process.env.OPTION1); // npm install dotenv @types/dotenv --save  import * as dotenv from dotenv   dotenv.config()
        }
        else {
            task = new Someone(setitem);
            listtemplate.render(task, type.value, 'end');
            // console.log(process.env.OPTION1); // npm install dotenv @types/dotenv --save  import * as dotenv from dotenv   dotenv.config()
        }
    }
    else {
        alert('Invalid credentials');
    }
});
const table_form = document.querySelector('.table_info');
const firstname = document.querySelector('#firstname');
const middlename = document.querySelector('#middlename');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const stdcode = document.querySelector('#stdcode');
const phno = document.querySelector('#phno');
const table_body = document.querySelector('#output-row');
const count_num = (num) => {
    let count = 0;
    while (num > 0) {
        num = parseInt(`${num / 10}`);
        count++;
    }
    return count;
};
let table_template;
table_form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (firstname.value !== '' && middlename.value !== '' && lastname.value !== '' && email.value !== '' &&
        (count_num(phno.valueAsNumber) === 10) && (stdcode.valueAsNumber < 100 && stdcode.valueAsNumber > 0)) {
        let basicForm = new Basicform(firstname.value, middlename.value, lastname.value, email.value, stdcode.valueAsNumber, phno.valueAsNumber);
        table_template = new TableTemplate(table_body);
        table_template.render(basicForm);
    }
    else {
        alert('Invalid credentials');
    }
});
