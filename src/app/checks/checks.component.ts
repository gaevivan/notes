import { Component, OnInit } from "@angular/core";

@Component({
    selector: "checks",
    template: `
        <input type="checkbox"/>
        <input type="checkbox" class="color-pearl"/>
        <input type="checkbox" class="color-garnet"/>
        <input type="checkbox" class="color-sapphire"/>
        <input type="checkbox" class="color-emerald"/>
        <input type="checkbox" class="color-cobalt"/>
    `,
    styles: [
        `
            :host {
                height: fit-content;
                box-sizing: border-box;
                display: flex;
                width: fit-content;
                flex-wrap: wrap;
                align-content: start;
            }
        `
    ]
})
export class ChecksComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
