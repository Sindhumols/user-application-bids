import { animate, style, transition, trigger } from '@angular/animations';
export const ANI_ENTER_TIMING_ = 'cubic-bezier(0, 0, .2, 1)';
export const ANI_LEAVE_TIMING_ = 'cubic-bezier(.4, 0, 1, 1)';
export const TRANSITION_DURATION_M = '225ms';
export const TRANSITION_DURATION_ENTER = TRANSITION_DURATION_M;
export const TRANSITION_DURATION_LEAVE = '1195ms';
export const ANI_ENTER_TIMING = `${TRANSITION_DURATION_ENTER} ${ANI_ENTER_TIMING_}`;
export const ANI_LEAVE_TIMING = `${TRANSITION_DURATION_LEAVE} ${ANI_LEAVE_TIMING_}`;

export const expandAnimation = [
    trigger('expand', [
        transition(':enter', [
            style({ height: 0, overflow: 'hidden' }),
            animate(ANI_ENTER_TIMING, style({ height: '*' }))
        ]), // void => *
        transition(':leave', [
            style({ overflow: 'hidden' }),
            animate(ANI_LEAVE_TIMING, style({ height: 0 }))
        ])
    ])
];

export const expandAnimationAllowOverflow = [
    trigger('expandAllowOverflow', [
        transition(':enter', [
            style({ height: 0 }),
            animate(ANI_ENTER_TIMING, style({ height: '*' }))
        ]), // void => *
        transition(':leave', [
            animate(ANI_LEAVE_TIMING, style({ height: 0 }))
        ])
    ])
];


export const expandFadeAnimation = [
    trigger('expandFade', [
        transition(':enter', [
            style({ height: 0, opacity: 0, overflow: 'hidden' }),
            animate(ANI_ENTER_TIMING, style({ height: '*', opacity: 1 }))
        ]), // void => *
        transition(':leave', [
            style({ overflow: 'hidden', opacity: 1 }),
            animate(ANI_LEAVE_TIMING, style({ height: 0, opacity: 0 }))
        ])
    ])
];
