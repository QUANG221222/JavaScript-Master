/**
 * Trong JS, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường được sử dụng khi cần thực hiện môt hành động nhiều lần cho đến khi một điều kiện nào đó được thõa mãn
 */

//for ... in: Lặp qua các thuộc tính của môt đối tượng

let developer = {
  userName: 'NhatQuangDev',
  age: 19,
  gender: 'Male',
  country: 'Vietnam',
  hobies: ['coding', 'reading', 'sleeping']
}
for (let key in developer) {
  console.log(`${key}: ${developer[key]}`)
  if (key === 'hobies') {
    console.log(developer[key])
  }
  console.log('--------------------')
}

//Thay vì chúng ta phải log từng dòng 1 như thế này:
//console.log('userName:', developer.userName)
//console.log('age:', developer.age)
//console.log('gender:', developer.gender)
//console.log('country:', developer.country)
//console.log('hobies:', developer.hobies)
