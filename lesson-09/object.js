/**
 * Trong JS, đối tượng (object) là một cấu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các dữ liệu phức tạp. Đối tượng bao gồm các cặp key-value (khóa và giá trị). Mỗi khóa là một chuỗi (String) và giá trị có thể là bất kỳ loại dữ liệu nào, bao gồm các đối tượng khac (nested object).
 */
/** 2 Cách tạo Object với cú pháp object literal và từ khóa new object */

//Cú pháp Object literal
let developer = {
  userName: 'NhatQuangDev',
  age: 19,
  greet: function () {
    console.log('Hi Aliens, I am' + this.userName + ' from the planet Earth')
  },
  skill: ['JavaScript', 'React', 'Node.js'],
  positions: {
    frontend: ['React', 'Angular', 'Vue.js'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    fullStack: true
  }
}

console.log(developer)
//Từ khóa new OBject()
// let developer2 = new Object()
// developer2.userName = 'NhatQuangDev'
// developer2.age = 19
// developer2.greet = function () {
//   console.log('Hi Aliens, I am' + this.userName + ' from the planet Earth')
// }
// developer2.skill = ['JavaScript', 'React', 'Node.js']
// developer2.positions = {
//   frontend: ['React', 'Angular', 'Vue.js'],
//   backend: ['Node.js', 'Express', 'MongoDB'],
//   fullStack: true
// }
// console.log(developer2)

console.log('------------------------')

// 2 cách để truy cập đến thuộc tính của object
console.log(developer.userName)
console.log(developer['userName'])

// Thêm / sửa / xóa thuộc tính
developer.gender = 'male'
developer.age = 20
delete developer.greet
console.log(developer)

//Lặp qua các thuộc tính của một đối tượng: lesson-07/for-in.js
// Đối tượng chứa các thuộc tính là method function: lesson-08/function-method.js
