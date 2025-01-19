/**
 * Trong JS, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường được sử dụng khi cần thực hiện môt hành động nhiều lần cho đến khi một điều kiện nào đó được thõa mãn
 */

//do ... while: giống như while, nhưng đoạn mã sẽ được thực hiện ít nhất 1 lần trước khi điều kiện điểm tra.

let i = 0
//let i = 11 //Dùng để so sánh với while
do {
  console.log(`Count : ${i}`)
  i++
} while (i < 11)
