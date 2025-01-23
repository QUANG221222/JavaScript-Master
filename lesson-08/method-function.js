// Method Function (hàm phương thức): là hàm được định nghĩa / khai báo bên trong đối tượng, được coi là 1 phương thức của đối tượng.

let developer = {
  userName: 'NhatQuangDev',
  age: 19,
  greet: function () {
    console.log('Hi Aliens, I am' + this.userName + ' from the planet Earth')
  },
  greetArrowFn: () => {
    console.log('Hi Aliens, I am' + this.userName + ' from the planet Earth') // Arrow function sẽ không có this
  }
}
developer.greet()
developer.greetArrowFn()
