import { data } from './data.mjs'

export function A() {
    let response = false
    for (const item of data) {
        if (item.value.a) {
            const { enabled } = item
            if (enabled) response = enabled
        }
    }
    return response
}

export function B(num) {
    return num >= 0 && num < data.length ? data[num] : 'err'
}

export function C() {
    let sum = 0

    for (const item of data) {
        const { a, b, c } = item.value
        sum += a + b + c
    }

    return sum ? sum : false
}
