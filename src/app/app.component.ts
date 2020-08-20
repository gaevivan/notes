import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <p class="mt-4 pt-4">Button</p>
        <buttons></buttons>
        <hr>
        <p>Checkbox</p>
        <checks></checks>
        <hr>
        <p>Radio</p>
        <radios></radios>
    `,
    styles: [
        `
            :host {
                padding: 10px;
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            hr {
                width: 100%;
                border: 1px solid rgba(0,0,0,.2);
                margin: 1.5rem 0;
            }
        `
    ]
})
export class AppComponent {}
