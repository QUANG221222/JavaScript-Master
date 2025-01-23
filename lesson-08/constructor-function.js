// Constructor Function (hàm khởi tạo - hàm tạo) : sử dụng để tạo đối tượng mới. Thường được kết hợp với từ khóa new

function Developer(userName) {
  this.userName = userName
  this.greet = function () {
    console.log('Hi Aliens, I am ' + this.userName + ' from the planet Earth')
  }
}

const nhatquangdevReal = new Developer('NhatQuangDev Real')
nhatquangdevReal.greet()

const nhatquangdevFake = new Developer('NhatQuangDev Fake')
nhatquangdevFake.greet()
