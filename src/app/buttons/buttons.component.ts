import { Component, OnInit } from "@angular/core";

@Component({
    selector: "buttons",
    template: `
        <button>Нажать</button>
        <button class="color-pearl">Нажать</button>
        <button class="color-garnet">Удалить</button>
        <button class="color-sapphire">Перейти</button>
        <button class="color-emerald">Добавить</button>
        <button class="color-cobalt">Кнопка</button>
        <button class="color-garnet"><span class="gip-icon-arrow-left"></span></button>
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
            button:hover [class^="gip-icon-"] {
                background-color: white;
            }
            [class^="gip-icon-"] {
                display: block;
                width: 20px;
                height: 20px;
                background-color: black;
            }
            .gip-icon-check {
                -webkit-mask: url("assets/check.svg") no-repeat center;
            }
            .gip-icon-arrow-left {
                -webkit-mask: url("assets/arrow-left.svg") no-repeat center;
            }
        `
    ]
})
export class ButtonsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
