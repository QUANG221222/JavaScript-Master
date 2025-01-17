/**
 * JavaScript là ngôn ngữ được định kiểu dữ liệu linh hoạt (dynamic), điều này rất tiện lợi nhưng lại cũng đồng nghĩa với việc dễ xảy ra những bug phát sinh trong quá trình development nếu bạn chưa nắm rõ cốt lõi về các kiểu dữ liệu
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing
 * Vậy nến mới có 1 thứ tên là TypeScript được sinh ra
 */
let x //Now x is undefined
x = 7 //Now x is 7
x = 'hello' //Now x is hello
x = true //Now x is true
x = null //Now x is null
x = undefined //Now x is undefined
console.log(x)
console.log('--------------------')
/**
 * Ví dụ nhanh về sự khác biệt giữa primitive types và reference types
 */

// Primitive types
let userName = 'Nhat Quang'
let userNameCopy = userName
userNameCopy = 'Nhat Quang Dev - 1 lập trình viên'
console.log('userName: ', userName)
console.log('userNameCopy: ', userNameCopy)
console.log('--------------------')

//Reference types
let objectA = { userName: 'Nhat Quang' }
let objectB = objectA // lúc này thì cả objectB và objectA sẽ tham chiếu đến cùng một đối tượng
objectB.userName = 'Nhat Quang Dev - 1 lập trình viên'
console.log('objectA: ', objectA)
console.log('objectB: ', objectB)
