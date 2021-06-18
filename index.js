import * as wasm from "calculator";

// add eventListener to each button 

document.querySelector('#addBtn').addEventListener('click', () => {
    let x = document.querySelector('#firstValue').value;
    let y = document.querySelector('#secondValue').value;
    if (!x && !y) {
     alert("please enter input values") 
     return
    } 
    let z = wasm.add(x, y)
    document.querySelector('#answerDisplay').innerHTML = z
 })

 document.querySelector('#subBtn').addEventListener('click', () => {
     let a = document.querySelector('#firstValue').value;
     let b = document.querySelector('#secondValue').value;
     if (!a && !b) {
      alert("please enter input values") 
      return
     } 
     let c = wasm.sub(a, b)
     document.querySelector('#answerDisplay').innerHTML = c
  })
  document.querySelector('#mulBtn').addEventListener('click', () => {
      let p = document.querySelector('#firstValue').value;
      let q = document.querySelector('#secondValue').value;
      if (!p && !q) {
       alert("please enter input values") 
       return
      } 
      let s = wasm.mul(p, q)
      document.querySelector('#answerDisplay').innerHTML = s
   })
   
document.querySelector('#divBtn').addEventListener('click', () => {
    let n = document.querySelector('#firstValue').value;
    let m = document.querySelector('#secondValue').value;
    if (!n && !m) {
     alert("please enter input values") 
     return
    } 
    let r = wasm.div(n, m)
    document.querySelector('#answerDisplay').innerHTML = r
 })

 document.querySelector('#modBtn').addEventListener('click', () => {
    let i = document.querySelector('#firstValue').value;
    let h = document.querySelector('#secondValue').value;
    if (!i && !h) {
     alert("please input values") 
     return
    } 
    let k = wasm.div(i, h)
    document.querySelector('#answerDisplay').innerHTML = k
 })
 document.querySelector('#clr').addEventListener('click', () => {
   
    document.querySelector('#answerDisplay').innerHTML = " "
 })
 
