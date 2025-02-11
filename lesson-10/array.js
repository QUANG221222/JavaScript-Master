/**
 * Trong JavaScript, 'mảng' (array) là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
 * Các giá trị trong mảng có thể là bất kỳ dữ liệu nào, number, string, object, thậm chí là mảng khác.
 * Mảng trong JS có các chỉ số - Index bắt đầu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0, phần tử thứ hai có index là 1, phần tử thứ ba có index là 2 v.v.
 */

// Ví dụ cơ bản về cách tạo và sử dụng mảng trong JS

// Tạo một Array chứa các số từ 1-5
let numbers = [1, 2, 3, 4, 5]

// Truy cập phần tử đầu tiên của mảng (theo index bằng = 0)

console.log('First item of numbers: ', numbers[0])
// Truy cập phần tử cuối cùng của mảng (theo index bằng = array.length - 1)
console.log('Last item of numbers: ', numbers[numbers.length - 1])

// Mảng có thể chứa bất kỳ kiểu dữ liệu nào, ví dụ
let mixedArray = [1, '2', true, null, undefined, { userName: 'Quang' }, [1, 2, 3]]
console.log(mixedArray)
