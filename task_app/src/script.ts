import { ListTemplate } from "./Dom/ListTemplate.js";
import { TableTemplate } from "./Dom/TableTemplate.js";
import { Basicform } from "./classes/BasicForm.js";
import { Formme } from "./classes/Formme.js";
import { Someone } from "./classes/Someone.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


const list_form = document.querySelector('.menu') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;

const display_output = document.querySelector('.output-field') as HTMLUListElement;

list_form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const setitem: string = details.value
    let task: HasFormatter;
    const listtemplate: ListTemplate = new ListTemplate(display_output);

    if (type.value!='' && details.value!='') {
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
})



const table_form = document.querySelector('.table_info') as HTMLFormElement;
const firstname = document.querySelector('#firstname') as HTMLInputElement;
const middlename = document.querySelector('#middlename') as HTMLInputElement;
const lastname = document.querySelector('#lastname') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const stdcode = document.querySelector('#stdcode') as HTMLInputElement;
const phno = document.querySelector('#phno') as HTMLInputElement;

const table_body = document.querySelector('#output-row') as HTMLTableElement;

const count_num = (num: number): number => {
    let count: number = 0;
    while (num > 0) {
        num = parseInt(`${num / 10}`);
        count++;
    }
    return count;
}

let table_template: TableTemplate;
table_form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    if (
        firstname.value !== '' && middlename.value !== '' && lastname.value !== '' && email.value !== '' &&
        (count_num(phno.valueAsNumber) === 10) && (stdcode.valueAsNumber < 100 && stdcode.valueAsNumber > 0)
    ) {
        let basicForm: Basicform = new Basicform(firstname.value, middlename.value, lastname.value, email.value, stdcode.valueAsNumber, phno.valueAsNumber);
        table_template = new TableTemplate(table_body);
        table_template.render(basicForm);
    }
    else {
        alert('Invalid credentials');
    }
})