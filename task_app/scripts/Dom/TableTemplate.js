export class TableTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item) {
        // creating structure
        let tr = document.createElement('tr');
        let td_firstname = document.createElement('td');
        let td_middlename = document.createElement('td');
        let td_lastname = document.createElement('td');
        let td_email = document.createElement('td');
        let td_stdcode = document.createElement('td');
        let td_phno = document.createElement('td');
        // getting the value
        td_firstname.innerText = item.getFirstName();
        td_middlename.innerText = item.getMiddleName();
        td_lastname.innerText = item.getLastName();
        td_email.innerText = item.getEmail();
        const phonenumber = `${item.getPhno()}`; // convert number to string
        td_phno.innerText = phonenumber; // put the string inside the innerText property
        const stdCode = `${item.getStdCode()}`; // convert number to string
        td_stdcode.innerText = stdCode; // put the string inside the innerText property
        tr.append(td_firstname);
        tr.append(td_middlename);
        tr.append(td_lastname);
        tr.append(td_email);
        tr.append(td_stdcode);
        tr.append(td_phno);
        this.container.prepend(tr);
    }
}
