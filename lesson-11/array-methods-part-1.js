/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu mảng trong JS.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
 * Phần 1: push(), pop(), shift(), unshift(), forEach(), map(), filter(), find(), reduce(), some()
 */
// Tạo một Array chứa các số từ 1-5
let numbers = [1, 2, 3, 4, 5]
console.log('legth of numbers: ', numbers.length) // Kết quả: 5

// push() - Thêm phần tử mới vào cuối cùng của mảng
numbers.push(6)
console.log('After Push:', numbers) // Kết quả: [1, 2, 3, 4, 5, 6]

// pop() - Loại bỏ phần tử cuối cùng của mảng
numbers.pop()
console.log('After Pop:', numbers) // Kết quả: [1, 2, 3, 4, 5]

// shift() - Loại bỏ phần tử đầu tiên của mảng
numbers.shift()
console.log('After Shift:', numbers) // Kết quả: [2, 3, 4, 5]

// unshift() - Thêm phần tử mới vào đầu của mảng
numbers.unshift(1) // Kết quả: [1, 2, 3, 4, 5]
console.log('After Unshift:', numbers)

// forEach() - Lặp qua từ phần từ của mảng
console.log('Start forEach:', numbers)
numbers.forEach((number, index) => {
  console.log(`Index: ${index} - Value: ${number}`)
})

// map() - Tạo một mảng mới với các phần tử được biến đổi từ mảng gốc, ví dụ bình phương từng phần tử
let squareNumbers = numbers.map((number) => {
  return number * number
})
console.log('After map() - numbers:', numbers) // Kết quả: [1, 2, 3, 4, 5]
console.log('After map() - squareNumbers:', squareNumbers) // Kết quả: [1, 4, 9, 16, 25]

// filter() - Tạo một mảng mới với các phần tử thõa mãn điều kiện, ví dụ lấy các số chẵn
let evenNumbers = numbers.filter((number) => {
  return number % 2 === 0
})
console.log('After filter() - evenNumbers:', evenNumbers) // Kết quả: [2, 4]

// find() - Tìm phần tử đầu tiền thõa mãn điều kiện
let foundNumber = numbers.find((number) => {
  return number > 3
})
console.log('After find() - foundNumber:', foundNumber) // Kết quả: 4

// reduce() - Tính toán một giá trị duy nhất từ mảng, ví dụ tính trong mảng
let sum = numbers.reduce((total, numbers) => {
  return total + numbers
}, 0)
console.log('After reduce() - sum:', sum) // Kết quả: 15

// some() - Kiểm tra xem mảng có ít nhất một phần tử thõa mãn điều kiện hay không, trả về boolean true/ false
let hasEvenNumber = numbers.some((number) => {
  console.log('Test method some(): ', number)
  return number % 2 === 0
})
console.log('After some() - hasEvenNumber:', hasEvenNumber) // Kết quả: true
