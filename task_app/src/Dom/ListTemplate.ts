import { HasFormatter } from "../interfaces/HasFormatter.js";

type pos = 'start' | 'end';

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, position: pos) {
        let li = document.createElement('li');

        let h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        let p = document.createElement('p');
        p.innerText = item.display_message();
        li.append(p);

        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}