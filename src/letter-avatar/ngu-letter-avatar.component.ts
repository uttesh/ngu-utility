import { Component, ElementRef, AfterViewInit, Input } from "@angular/core";

import { Attributes, LAmeta } from "./lameta";

declare function unescape(x: string): string;

@Component({
    selector: "ngu-letter-avatar",
    template: "<ng-content></ng-content>"
})
export class NguLetterAvatarComponent  {
    private letteravatar: any;
    private imageTag: HTMLElement;
    private _meta: LAmeta = new LAmeta();
    private attribute: Attributes = new Attributes();

    @Input("avatar-alphabet-colors") alphabetcolors: string[];
    @Input("avatar-text-color") textColor: string;
    @Input("avatar-default-border") defaultBorder: string;
    @Input("avatar-triangle-up") triangleup: string;
    @Input("avatar-font-size") fontsize: string;
    @Input("avatar-height") height: string;
    @Input("avatar-width") width: string;
    @Input("avatar-font-weight") fontWeight: string;
    @Input("avatar-font-family") fontFamily: string;
    base: string = "data:image/svg+xml;base64,";
    @Input("avatar-radius") radius: string;
    @Input("avatar-dynamic") dynamic: string;
    @Input("avatar-rotate-degree") rotatedeg: string;
    @Input("avatar-char-count") charCount: string = "1";
    @Input("avatar-data") data: string;
    @Input("avatar-border-style") avatarBorderStyle: string;
    @Input("avatar-border") avatarborder: string;
    @Input("avatar-custom-border") avatarcustomborder: string;
    @Input("avatar-shape") shape: string;
    @Input("avatar-custom-bg-color") avatarcustombgcolor: string;

    constructor(el: ElementRef) {
        this.letteravatar = el.nativeElement;
    }

    ngAfterViewInit(): void {
        if (!this.alphabetcolors) {
            this.alphabetcolors = this.getPropertyValue(this.attribute.alphabetcolors) ?
                this.getPropertyValue(this.attribute.alphabetcolors) : this._meta.defaultColors;
        }
        if (!this.textColor) {
            this.textColor = this.getPropertyValue(this.attribute.textColor) ?
                this.getPropertyValue(this.attribute.textColor) : this._meta.defaultTextColor;
        }
        if(!this.avatarcustombgcolor) {
            this.avatarcustombgcolor = this.getPropertyValue(this.attribute.avatarcustombgcolor);
        }

        if (!this.avatarborder) {
            this.avatarborder = this.getPropertyValue(this.attribute.avatarborder) ?
                this.getPropertyValue(this.attribute.avatarborder) : this._meta.defaultAvatarborder;
        }

        if (!this.defaultBorder) {
            this.defaultBorder = this.getPropertyValue(this.attribute.defaultBorder) ?
                this.getPropertyValue(this.attribute.defaultBorder) : this._meta.defaultBorder;
        }
        if (!this.triangleup) {
            this.triangleup = this.getPropertyValue(this.attribute.triangleup) ?
                this.getPropertyValue(this.attribute.triangleup) : this._meta.defaultTriangleup;
        }
        if (!this.fontsize) {
            this.fontsize = this.getPropertyValue(this.attribute.fontsize) ?
                this.getPropertyValue(this.attribute.fontsize) : this._meta.deafultFontsize;
        }
        if (!this.height) {
            this.height = this.getPropertyValue(this.attribute.height) ?
                this.getPropertyValue(this.attribute.height) : this._meta.defaultHeight;
        }
        if (!this.width) {
            this.width = this.getPropertyValue(this.attribute.width) ?
                this.getPropertyValue(this.attribute.width) : this._meta.deafultWidth;
        }
        if (!this.radius) {
            this.radius = this.getPropertyValue(this.attribute.radius) ?
                this.getPropertyValue(this.attribute.radius) : this._meta.defaultRadius;
        }
        if (!this.dynamic) {
            this.dynamic = this.getPropertyValue(this.attribute.dynamic) ?
                this.getPropertyValue(this.attribute.dynamic) : false;
        }
        if (!this.rotatedeg) {
            this.rotatedeg = this.getPropertyValue(this.attribute.rotatedeg) ?
                this.getPropertyValue(this.attribute.rotatedeg) : this._meta.defaultRotatedeg;
        }
        if (!this.fontWeight) {
            this.fontWeight = this.getPropertyValue(this.attribute.fontWeight) ?
                this.getPropertyValue(this.attribute.fontWeight) : this._meta.defaultFontWeight;
        }
        if (!this.fontFamily) {
            this.fontFamily = this.getPropertyValue(this.attribute.fontFamily) ?
                this.getPropertyValue(this.attribute.fontFamily) : this._meta.defaultFontFamily;
        }
        if (!this.shape) {
            this.shape = this.getPropertyValue(this.attribute.shape);
        }
        if (!this.data) {
            this.data = this.getPropertyValue(this.attribute.data);
        }
        this.createAvatar();
    }
    private getPropertyValue(property: string): any {
        let result: any = "";
        result = this.letteravatar.getAttribute(property);
        return result;
    }

    private createAvatar(): void {
        let c: string = "";
        if (this.charCount === "2") {
            let _data: string = this.getFirstAndLastName(this.data.toUpperCase());
            if (_data) {
                c = _data;
            } else {
                c = this.data.substring(0, +this.charCount).toUpperCase();
            }
        } else {
            c = this.data.substring(0, +this.charCount).toUpperCase();
        }
        let textTag: HTMLElement = this.getCharacterTextTag(c, this.textColor, this.fontFamily, this.fontWeight, this.fontsize);
        let colorIndex: number;
        let color: string = "";

        /**
         * Populate the colors according to attributes
         */
        if (c.charCodeAt(0) < 65) {
            color = this.getRandomColors();
        } else {
            colorIndex = Math.floor((c.charCodeAt(0) - 65) % this.alphabetcolors.length);
            color = this.alphabetcolors[colorIndex];
        }

        if (this.avatarcustombgcolor) {
            color = this.avatarcustombgcolor;
        }

        this.createSvg(this.width, this.height, color, textTag);
        let lvcomponent:string = this.getLVText();
        let svgHtml: string = window.btoa(unescape(encodeURIComponent(lvcomponent)));
        let component: string;
        let base: string = this.base;
        let _style: string = "";
        if (this.avatarBorderStyle) {
            _style = this.avatarBorderStyle;
        } else if(this.avatarborder === "true") {
            _style = this.defaultBorder;
        }

        if (this.rotatedeg !== "0") {
            // tslint:disable-next-line:max-line-length
            _style = "-ms-transform: rotate(" + this.rotatedeg + "deg); -webkit-transform: rotate(" + this.rotatedeg + "deg); transform: rotate(" + this.rotatedeg + "deg)";
        }

        if (this.shape) {
            if (this.shape === "round") {
                let round_style: string = this.radius + _style;
                if (this.data.indexOf("http") > -1 || this.data.indexOf("data:image") > -1) {
                    let img_size: string = "width:" + this.width + "px;height:" + this.height + "px;";
                    component = "<img src=" + this.data + " style='" + img_size + round_style + "'  />";
                } else {
                    component = "<img src=" + base + svgHtml + " style='" + round_style + "' title='" + this.data + "' />";
                }
            }
        } else {
            if (this.data.indexOf("http") > -1 || this.data.indexOf("data:image") > -1) {
                let img_size: string = "width:" + this.width + "px;height:" + this.height + "px;";
                component = "<img src=" + this.data + " style='" + img_size + _style + "'  />";
            } else {
                component = "<img src=" + base + svgHtml + " style='" + _style + "' title='" + this.data + "' />";
            }
        }

        this.letteravatar.innerHTML = component;

    }

    private getLVText(): string {
        let lvTag: HTMLElement = document.createElement("div");
        lvTag.appendChild(this.imageTag.cloneNode());
        return this.imageTag.outerHTML;
    }

    /**
     * Populate the svg tag which will used for the avatar generation
     * @param width
     * @param height
     * @param color
     * @returns
     */
    private createSvg(width: string, height: string, color: string, cobj: HTMLElement): string {

        let svgTag: HTMLElement = document.createElement("svg");
        svgTag.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgTag.setAttribute("pointer-events", "none");
        svgTag.setAttribute("width", width);
        svgTag.setAttribute("height", height);
        svgTag.setAttribute("style", "background-color:" + color + ";width:" + width + "px" + ";height:" + height + "px");
        svgTag.appendChild(cobj);
        this.imageTag = svgTag;

        return svgTag.innerHTML;
    }

    /**
     *  Generate the Letter tag by using the svg text element
     * @param character
     * @param textColor
     * @param fontFamily
     * @param fontWeight
     * @param fontsize
     * @returns
     */
    // tslint:disable-next-line:max-line-length
    private getCharacterTextTag(character:string, textColor: string, fontFamily: string, fontWeight: string, fontsize: string): HTMLElement {
        let textTag: HTMLElement = document.createElement("text");
        textTag.setAttribute("text-anchor", "middle");
        textTag.setAttribute("x", "50%");
        textTag.setAttribute("y", "50%");
        textTag.setAttribute("dy", "0.35em");
        textTag.setAttribute("pointer-events", "auto");
        textTag.setAttribute("fill", textColor);
        textTag.setAttribute("font-family", fontFamily);
        textTag.setAttribute("style", "font-weight:" + fontWeight + ";font-size:" + fontsize + "px");
        textTag.innerText = character;
        return textTag;
    }

    /**
     * Get the random colors
     * @returns
     */
    private getRandomColors(): string {
        let letters: string[] = "0123456789ABCDEF".split("");
        let _color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            _color += letters[Math.floor(Math.random() * 16)];
        }
        return _color;
    }

    /**
     * get the first name and last name first letters and combined and form the letter avatar
     * @param data
     * @returns
     */
    private getFirstAndLastName(data: string): string {
        let names: string[] = data.split(" ");
        if (names && names.length >= 2) {
            let firstName: string = names[0];
            let lastName: string = names[1];
            if (firstName && lastName) {
                let text: string = firstName.substr(0, 1) + lastName.substr(0, 1);
                return text;
            } else {
                return data.substr(0, 2);
            }
        }
    }
}