import * as wasm from './calculator_bg.wasm';

/**
* @param {number} x
* @param {number} y
* @returns {number}
*/
export function add(x, y) {
    var ret = wasm.add(x, y);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function sub(a, b) {
    var ret = wasm.sub(a, b);
    return ret;
}

/**
* @param {number} p
* @param {number} q
* @returns {number}
*/
export function mul(p, q) {
    var ret = wasm.mul(p, q);
    return ret;
}

/**
* @param {number} n
* @param {number} m
* @returns {number}
*/
export function div(n, m) {
    var ret = wasm.div(n, m);
    return ret;
}

