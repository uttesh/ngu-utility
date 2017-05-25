import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NguLetterAvatarComponent} from './letter-avatar/ngu-letter-avatar.component';


@NgModule({
    imports: [CommonModule],
    declarations: [NguLetterAvatarComponent
    ],
    providers: [],
    exports: [NguLetterAvatarComponent]
})
export class NguUtilityModule { }
