/**
 * Trong JS, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường được sử dụng khi cần thực hiện môt hành động nhiều lần cho đến khi một điều kiện nào đó được thõa mãn
 */
//for : Dùng khi biết trước số lần lặp.
for (let i = 0; i <= 10; i++) {
  console.log(`Count : ${i}`)
}
console.log('--------------------')

let i = 10

for (; i >= 0; ) {
  console.log(`Count : ${i}`)
  i--
}
