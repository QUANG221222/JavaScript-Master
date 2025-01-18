//Bitwise Operators: Toán tử dùng để thực hiện các phép toán bit trong hệ nhịn phân
let x = 5 //0101 (hệ nhị phân)
let y = 3 //0011 (hệ nhị phân)

console.log(x & y) //AND: 0101 & 0011 = 0000 (hệ nhị phân)
console.log(x | y) //OR: 0101 | 0011 = 0111 (7)
console.log(x ^ y) //XOR: 0101 ^ 0011 = 0110 (6)
console.log(~x) //NOT: ~0101 = 1010 (-6)
console.log(x << 1) //SHILFT LEFT: 0101 << 1 = 1010 (10)
console.log(x >> 1) //SHIFT RIGHT: 0101 >> 1 = 0010 (2)

//Vì làm việc trực tiếp trên các bit của dữ liệu toán tử nên toán tử bitwise có thể phép toán nhanh hơn so với các phép toán số học thông thường.
//Ứng dụng nhiều trong các ứng dụng đòi hỏi hiệu suất cao như trò chơi, xử lý đồ họa, lập trình hệ thống, v.v.
