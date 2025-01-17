/** Nhóm các kiểu dữ liệu tham chiếu - Reference Types */
/**
 * Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (Stack) mà sẽ tham chiếu đến địa chỉ của đối tượng trong Heap Memory.
 * Các giá trị tham chiếu có thể được thay đổi sau khi chúng được tạo ra
 * Khi gán 1 đối tượng A cho B, thì cả A và B sẽ tham chiếu đến cùng một đối tượng, chứ không tạo ra bản sao độc lập riêng biệt.
 * Reference Types bao gồm các kiểu dữ liệu sau:
 */

// Object (Đối tượng): Đại diện cho một tập hợp các thuộc tính và phương thức
let developer = {
  userName: 'NhatQuangDev',
  age: 19,
  greet: function () {
    console.log('Hi Aliens, I am' + this.userName + ' from the planet Earth')
    console.log(`I am ${this.age} years old`)
  }
}
developer.greet()
console.log('developer.userName:', developer.userName)
console.log('developer.age:', developer.age)
console.log('--------------------')

// Array (Mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.
let color = ['red', 'green', 'blue', 'yellow', 'black', 'white']
console.log('color:', color)
console.log('color[0]:', color[0])
console.log('color[1]:', color[1])
console.log('color[2]:', color[2])
console.log('--------------------')

//Function (Hàm): Đại diện cho các hàm xử lý, cũng được coi là một loại đối tượng đặc biệt.
function weatherInfo(city) {
  console.log(`The weather in ${city} is hot`)
}
weatherInfo('Ho Chi Minh City')
console.log('--------------------')
