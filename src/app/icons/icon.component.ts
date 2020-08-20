import { Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: "icon",
    template: `<span class="icon">`,
    styles: [
        `
            input {
                z-index: 0;
                position: absolute;
                left: 0;
                content: "";
                outline: none;
                width: 20px;
                height: 20px;
                box-sizing: content-box;
                appearance: none;
                background-color: black;
                mask: url("assets/check.svg") no-repeat center;
                mask-size: 1em;
            }
        `
    ]
})
export class IconComponent {
    @Input() public name: string = "";

    constructor(public elementRef: ElementRef<HTMLElement>) {}

    public ngOnChanges(): void {
        if (!this.name || !this.name.length) {
            return;
        }
        // this.elementRef.nativeElement.style.mask = `url("src/assets/${this.name}.svg") no-repeat center`;
        // this.elementRef.nativeElement.style["-webkit-mask"] = `url("src/assets/${this.name}.svg") no-repeat center`;
    }
}