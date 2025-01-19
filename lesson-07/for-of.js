/**
 * Trong JS, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường được sử dụng khi cần thực hiện môt hành động nhiều lần cho đến khi một điều kiện nào đó được thõa mãn
 */
//for ... of: Dùng để lập qua các giá trị của 1 iterable object (những đối tượng có thể lặp), phổ biến như Array, String,...

let colors = ['red', 'green', 'blue', 'yellow', 'black', 'white']
for (let color of colors) {
  console.log(`Color : ${color}`)
}
console.log('--------------------')

let userName = 'NhatQuangDev - Một lập trình viên'
for (let char of userName) {
  console.log(`Char : ${char}`)
}
console.log('--------------------')
let developer = {
  userName: 'NhatQuangDev',
  age: 19,
  gender: 'Male',
  country: 'Vietnam',
  hobies: ['coding', 'reading', 'sleeping']
}
for (let key of developer) {
  //error vì json object không phải là iterable object
  console.log(`${key}: ${developer[key]}`)
}
