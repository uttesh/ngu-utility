import { ElementRef } from "@angular/core";
export declare class NguLetterAvatarComponent {
    private letteravatar;
    private imageTag;
    private _meta;
    private attribute;
    alphabetcolors: string[];
    textColor: string;
    defaultBorder: string;
    triangleup: string;
    fontsize: string;
    height: string;
    width: string;
    fontWeight: string;
    fontFamily: string;
    base: string;
    radius: string;
    dynamic: string;
    rotatedeg: string;
    charCount: string;
    data: string;
    avatarBorderStyle: string;
    avatarborder: string;
    avatarcustomborder: string;
    shape: string;
    avatarcustombgcolor: string;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    private getPropertyValue(property);
    private createAvatar();
    private getLVText();
    /**
     * Populate the svg tag which will used for the avatar generation
     * @param width
     * @param height
     * @param color
     * @returns
     */
    private createSvg(width, height, color, cobj);
    /**
     *  Generate the Letter tag by using the svg text element
     * @param character
     * @param textColor
     * @param fontFamily
     * @param fontWeight
     * @param fontsize
     * @returns
     */
    private getCharacterTextTag(character, textColor, fontFamily, fontWeight, fontsize);
    /**
     * Get the random colors
     * @returns
     */
    private getRandomColors();
    /**
     * get the first name and last name first letters and combined and form the letter avatar
     * @param data
     * @returns
     */
    private getFirstAndLastName(data);
}
