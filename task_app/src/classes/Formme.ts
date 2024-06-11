import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Formme implements HasFormatter {
    constructor(private details: string) { }

    display_message(): string {
        return `${this.details}`;
    }
}