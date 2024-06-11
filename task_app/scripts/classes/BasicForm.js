export class Basicform {
    constructor(firstname, lastname, middlename, email, stdcode, phno) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.email = email;
        this.stdcode = stdcode;
        this.phno = phno;
    }
    getFirstName() {
        return this.firstname;
    }
    getMiddleName() {
        return this.middlename;
    }
    getLastName() {
        return this.lastname;
    }
    getEmail() {
        return this.email;
    }
    getStdCode() {
        return this.stdcode;
    }
    getPhno() {
        return this.phno;
    }
}
