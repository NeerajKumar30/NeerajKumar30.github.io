
export class Basicform {
    constructor(private firstname: string,
        private lastname: string,
        private middlename: string,
        private email: string,
        private stdcode: number,
        private phno: number
    ) { }

    getFirstName(): string {
        return this.firstname;
    }

    getMiddleName(): string {
        return this.middlename;
    }

    getLastName(): string {
        return this.lastname;
    }
    
    getEmail(): string {
        return this.email;
    }

    getStdCode(): number {
        return this.stdcode;
    }

    getPhno(): number {
        return this.phno;
    }
}