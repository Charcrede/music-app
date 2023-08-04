import { trigger, transition, animate, style } from "@angular/animations";

export const animation = trigger('animation', [
    transition(':enter', [
        style({opacity:0}),
        animate('750ms', style({opacity: 1})),
    ]),
])