import { ValueChangeEvent } from "@angular/forms";

export const DELIVERY_SIZES = [
    {
        value: 'xs',
        rate: 9,
        min: 149,
        description: '17x12x9 см,<br>до 0.5 кг'
    },
    {
        value: 's',
        rate: 13,
        min: 199,
        description: '23x19x10 см,<br>до 2 кг'
    },
    {
        value: 'm',
        rate: 20,
        min: 249,
        description: '33x25x38 см,<br>до 5 кг'
    },
    {
        value: 'l',
        rate: 27,
        min: 349,
        description: '31x25x38 см,<br>до 12 кг'
    },
    {
        value: 'xl',
        rate: 35,
        min: 499,
        description: '60x35x30 см,<br>до 18 кг'
    },
    {
        value: 'max',
        rate: 70,
        min: 999,
        description: '120x120x80 см,<br>до 200 кг',
        mediaClass: 'main-size-media-palleta'
    }
] as const;

export const DELIVERY_SPEEDS = [
    {value: 'regular', label: 'Обычная'},
    {value: 'fast', label: 'Приоритетная'}
] as const;