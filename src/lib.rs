
mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(x: i32,y: i32)->i32 {
    let sum:i32 = x+y;
    return sum;
}

#[wasm_bindgen]
pub fn sub(a: i32,b: i32)->i32 {
    let substate:i32 = a-b;
    return substate;
}

#[wasm_bindgen]
pub fn mul(p: i32,q: i32)->i32 {
    let multiplication:i32 = p*q;
    return multiplication;
}

#[wasm_bindgen]
pub fn div(n: i32,m: i32)->i32 {
    let division:i32 = n/m;
    return division;
}

#[wasm_bindgen]
pub fn mod(i: i32,h: i32)->i32 {
    let modulus:i32 = (i*100)%h;
    return modulus;
}
