import { Component, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var LAmeta = /** @class */ (function () {
    function LAmeta() {
        this.defaultColors = ["#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29", "#0088B9", "#F18636", "#D93A37", "#A6B12E", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"];
        this.defaultTextColor = '#ffffff';
        this.defaultBorder = 'border:5px solid white';
        this.defaultTriangleup = 'width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid;';
        this.deafultFontsize = '30';
        this.defaultHeight = '50';
        this.deafultWidth = '50';
        this.defaultRadius = 'border-radius:50%;';
        this.deafultDynamic = 'false';
        this.defaultRotatedeg = '0';
        this.defaultAvatarborder = 'false';
        this.defaultFontWeight = '400';
        this.defaultFontFamily = 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif';
    }
    return LAmeta;
}());
var Attributes = /** @class */ (function () {
    function Attributes() {
        this.alphabetcolors = 'avatar-alphabet-colors';
        this.textColor = 'avatar-text-color';
        this.defaultBorder = 'avatar-default-border';
        this.triangleup = 'avatar-triangle-up';
        this.fontsize = 'avatar-font-size';
        this.height = 'avatar-height';
        this.width = 'avatar-width';
        this.radius = 'avatar-radius';
        this.avatarcustombgcolor = 'avatar-custom-bg-color';
        this.dynamic = 'avatar-dynamic';
        this.fontWeight = 'avatar-font-weight';
        this.fontFamily = 'avatar-font-family';
        this.shape = 'avatar-shape';
        this.data = 'avatar-data';
        this.rotatedeg = 'avatar-rotate-degree';
        this.avatarborder = 'avatar-border';
    }
    return Attributes;
}());
var NguLetterAvatarComponent = /** @class */ (function () {
    function NguLetterAvatarComponent(el) {
        this._meta = new LAmeta();
        this.attribute = new Attributes();
        this.base = "data:image/svg+xml;base64,";
        this.charCount = "1";
        this.letteravatar = el.nativeElement;
    }
    NguLetterAvatarComponent.prototype.ngAfterViewInit = function () {
        if (!this.alphabetcolors) {
            this.alphabetcolors = this.getPropertyValue(this.attribute.alphabetcolors) ?
                this.getPropertyValue(this.attribute.alphabetcolors) : this._meta.defaultColors;
        }
        if (!this.textColor) {
            this.textColor = this.getPropertyValue(this.attribute.textColor) ?
                this.getPropertyValue(this.attribute.textColor) : this._meta.defaultTextColor;
        }
        if (!this.avatarcustombgcolor) {
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
    };
    NguLetterAvatarComponent.prototype.getPropertyValue = function (property) {
        var result = "";
        result = this.letteravatar.getAttribute(property);
        return result;
    };
    NguLetterAvatarComponent.prototype.createAvatar = function () {
        var c = "";
        if (this.charCount === "2") {
            var _data = this.getFirstAndLastName(this.data.toUpperCase());
            if (_data) {
                c = _data;
            }
            else {
                c = this.data.substring(0, +this.charCount).toUpperCase();
            }
        }
        else {
            c = this.data.substring(0, +this.charCount).toUpperCase();
        }
        var textTag = this.getCharacterTextTag(c, this.textColor, this.fontFamily, this.fontWeight, this.fontsize);
        var colorIndex;
        var color = "";
        if (c.charCodeAt(0) < 65) {
            color = this.getRandomColors();
        }
        else {
            colorIndex = Math.floor((c.charCodeAt(0) - 65) % this.alphabetcolors.length);
            color = this.alphabetcolors[colorIndex];
        }
        if (this.avatarcustombgcolor) {
            color = this.avatarcustombgcolor;
        }
        this.createSvg(this.width, this.height, color, textTag);
        var lvcomponent = this.getLVText();
        var svgHtml = window.btoa(unescape(encodeURIComponent(lvcomponent)));
        var component;
        var base = this.base;
        var _style = "";
        if (this.avatarBorderStyle) {
            _style = this.avatarBorderStyle;
        }
        else if (this.avatarborder === "true") {
            _style = this.defaultBorder;
        }
        if (this.rotatedeg !== "0") {
            _style = "-ms-transform: rotate(" + this.rotatedeg + "deg); -webkit-transform: rotate(" + this.rotatedeg + "deg); transform: rotate(" + this.rotatedeg + "deg)";
        }
        if (this.shape) {
            if (this.shape === "round") {
                var round_style = this.radius + _style;
                if (this.data.indexOf("http") > -1 || this.data.indexOf("data:image") > -1) {
                    var img_size = "width:" + this.width + "px;height:" + this.height + "px;";
                    component = "<img src=" + this.data + " style='" + img_size + round_style + "'  />";
                }
                else {
                    component = "<img src=" + base + svgHtml + " style='" + round_style + "' title='" + this.data + "' />";
                }
            }
        }
        else {
            if (this.data.indexOf("http") > -1 || this.data.indexOf("data:image") > -1) {
                var img_size = "width:" + this.width + "px;height:" + this.height + "px;";
                component = "<img src=" + this.data + " style='" + img_size + _style + "'  />";
            }
            else {
                component = "<img src=" + base + svgHtml + " style='" + _style + "' title='" + this.data + "' />";
            }
        }
        this.letteravatar.innerHTML = component;
    };
    NguLetterAvatarComponent.prototype.getLVText = function () {
        var lvTag = document.createElement("div");
        lvTag.appendChild(this.imageTag.cloneNode());
        return this.imageTag.outerHTML;
    };
    NguLetterAvatarComponent.prototype.createSvg = function (width, height, color, cobj) {
        var svgTag = document.createElement("svg");
        svgTag.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgTag.setAttribute("pointer-events", "none");
        svgTag.setAttribute("width", width);
        svgTag.setAttribute("height", height);
        svgTag.setAttribute("style", "background-color:" + color + ";width:" + width + "px" + ";height:" + height + "px");
        svgTag.appendChild(cobj);
        this.imageTag = svgTag;
        return svgTag.innerHTML;
    };
    NguLetterAvatarComponent.prototype.getCharacterTextTag = function (character, textColor, fontFamily, fontWeight, fontsize) {
        var textTag = document.createElement("text");
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
    };
    NguLetterAvatarComponent.prototype.getRandomColors = function () {
        var letters = "0123456789ABCDEF".split("");
        var _color = "#";
        for (var i = 0; i < 6; i++) {
            _color += letters[Math.floor(Math.random() * 16)];
        }
        return _color;
    };
    NguLetterAvatarComponent.prototype.getFirstAndLastName = function (data) {
        var names = data.split(" ");
        if (names && names.length >= 2) {
            var firstName = names[0];
            var lastName = names[1];
            if (firstName && lastName) {
                var text = firstName.substr(0, 1) + lastName.substr(0, 1);
                return text;
            }
            else {
                return data.substr(0, 2);
            }
        }
    };
    return NguLetterAvatarComponent;
}());
NguLetterAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: "ngu-letter-avatar",
                template: "<ng-content></ng-content>"
            },] },
];
NguLetterAvatarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
NguLetterAvatarComponent.propDecorators = {
    "alphabetcolors": [{ type: Input, args: ["avatar-alphabet-colors",] },],
    "textColor": [{ type: Input, args: ["avatar-text-color",] },],
    "defaultBorder": [{ type: Input, args: ["avatar-default-border",] },],
    "triangleup": [{ type: Input, args: ["avatar-triangle-up",] },],
    "fontsize": [{ type: Input, args: ["avatar-font-size",] },],
    "height": [{ type: Input, args: ["avatar-height",] },],
    "width": [{ type: Input, args: ["avatar-width",] },],
    "fontWeight": [{ type: Input, args: ["avatar-font-weight",] },],
    "fontFamily": [{ type: Input, args: ["avatar-font-family",] },],
    "radius": [{ type: Input, args: ["avatar-radius",] },],
    "dynamic": [{ type: Input, args: ["avatar-dynamic",] },],
    "rotatedeg": [{ type: Input, args: ["avatar-rotate-degree",] },],
    "charCount": [{ type: Input, args: ["avatar-char-count",] },],
    "data": [{ type: Input, args: ["avatar-data",] },],
    "avatarBorderStyle": [{ type: Input, args: ["avatar-border-style",] },],
    "avatarborder": [{ type: Input, args: ["avatar-border",] },],
    "avatarcustomborder": [{ type: Input, args: ["avatar-custom-border",] },],
    "shape": [{ type: Input, args: ["avatar-shape",] },],
    "avatarcustombgcolor": [{ type: Input, args: ["avatar-custom-bg-color",] },],
};
var NguUtilityModule = /** @class */ (function () {
    function NguUtilityModule() {
    }
    return NguUtilityModule;
}());
NguUtilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NguLetterAvatarComponent
                ],
                providers: [],
                exports: [NguLetterAvatarComponent]
            },] },
];
NguUtilityModule.ctorParameters = function () { return []; };

export { NguUtilityModule, NguLetterAvatarComponent as ɵa };
//# sourceMappingURL=ngu-utility.js.map
