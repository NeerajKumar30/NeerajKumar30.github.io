import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Someone implements HasFormatter {
    constructor(private details: string) { }

    display_message(): string {
        return `${this.details}`;
    }
}