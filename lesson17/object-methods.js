/**
 * Có khá nhiều Methods - Phương thức xử lý dữ liệu Object trong JavaScript.
 * Dưới đây là một số phương thức phổ biến nhất.
 * Phần 1: create(), assign(), defineProperty(), defineProperties(), keys(), values(), entries(), fromEntries()
 */

// Object.create() tạo ra một đối tượng dựa trên một đối tượng mẫu - prototype
const person = {
    greet() {
        console.log("Hello there");
    }
}

const wangdev = Object.create(person); // Tạo ra một đối tượng mới dựa trên prototype person. Vì vậy, wangdev sẽ kế thừa phương thức greet từ person

wangdev.name = "Wang Dev";

wangdev.greet(); // Hello there
console.log(wangdev.name); // Wang Dev

// Object.assign() sao chép tất cả các thuộc tính một hoặc nhiều đối tượng trong nguồn ban đầu vào đối tượng đích. Kết quả trả về là đối tượng đích.
// - Nếu một thuộc tính đã tồn tại của đối tượng đích, nó sẽ bị ghi đè bởi thuộc tính từ đối tượng nguồn.
// - Phương thức này sẽ làm thay đổi đối tượng đích, nhưng không thay đổi các đối tượng nguồn.

const targetObj = { a: 1, b: 2 };
const originalObj = { b: 4, c: 5 };
const result = Object.assign(targetObj, originalObj);
console.log('Object.assign() > result', result); // { a: 1, b: 4, c: 5 }
console.log('Object.assign() > targetObj', targetObj); // { a: 1, b: 4, c: 5 } - targetObj đã bị thay đổi
console.log('Object.assign() > originalObj', originalObj); // { b: 4, c: 5 } - originalObj không bị thay đổi

// Object.defineProperty() thêm hoặc sửa đổi "Một" thuộc tính trên một đối tượng, và có thể kiểm soát chính xác hành viê của thuộc tính đó.
const obj1 = {};
Object.defineProperty(obj1, "name", {
    value: "Wang Dev",
    writable: false, // Không cho phép sửa đổi giá trị
})

console.log('Object.defineProperty():', obj1.name); // Wang Dev
obj1.name = "New Name"; // Thử sửa đổi giá trị. Nhưng vì writable: false nên sẽ không thay đổi được.
console.log('Object.defineProperty():', obj1.name); // Wang Dev

// Object.defineProperties() thêm hoặc sửa đổi "Nhiều" thuộc tính trên một đối tượng, và có thể kiểm soát chính xác hành vi của các thuộc tính đó.
const obj2 = {};
Object.defineProperties(obj2, {
    firstName: {
        value: "Wang",
        writable: true,
    },
    lastName: {
        value: "Dev",
        writable: false,
    }
});

console.log('Object.defineProperties():', obj2.firstName) // Wang
console.log('Object.defineProperties():', obj2.lastName) // Dev
obj2.firstName = "WangNguyen"; // Có thể sửa đổi vì writable: true
obj2.lastName = "NewLastName"; // Không thể sửa đổi vì writable: false
console.log('Object.defineProperties() after modification:', obj2.firstName) // WangNguyen
console.log('Object.defineProperties() after modification:', obj2.lastName) // Dev

// Object.keys() trả về một mảng (array) chứa toàn bộ tên thuộc tính của một đối tượng.
const obj3 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj3);
console.log('Object.keys():', keys); // ['a', 'b', 'c']

// Object.values() trả về một mảng (array) chứa toàn bộ giá trị của các thuộc tính trong một đối tượng.
const values = Object.values(obj3);
console.log('Object.values():', values); // [1, 2, 3]

// Object.entries() trả về một mảng gồm các cặp [key, value] của các thuộc tính trong một đối tượng.
const entries = Object.entries(obj3);
console.log('Object.entries():', entries); // [['a', 1], ['b', 2], ['c', 3]]

// Object.fromEntries() tạo một đối tượng mới từ một mảng gồm các cặp [key, value].
const arr = [['x', 10], ['y', 20], ['z', 30]];
const newObj = Object.fromEntries(arr);
console.log('Object.fromEntries():', newObj); // { x: 10, y: 20, z: 30 }