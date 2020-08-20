import { Component, OnInit } from "@angular/core";

@Component({
    selector: "radios",
    template: `
        <form>
        <input type="radio" name="1"/>
        <input type="radio" name="1" class="color-pearl"/>
        <input type="radio" name="1" class="color-garnet"/>
        <input type="radio" name="1" class="color-sapphire"/>
        <input type="radio" name="1" class="color-emerald"/>
        <input type="radio" name="1" class="color-cobalt"/>
        </form>
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
export class RadiosComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
