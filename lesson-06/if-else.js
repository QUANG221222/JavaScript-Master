//Câu lệnh điều kiện
//If - else: Nếu A thì làm gì ... Không phải A thì làm gì...
//If - else if - else: Nếu A thì ... không phải A thì lại nếu B ... Không phải B tiếp nữa thì ...vv

let weather = 'HEAVY RAIN'
if (weather.toLocaleLowerCase() === 'heavy rain') {
  console.log('It is raining')
} else {
  console.log('It is not raining')
}

let score = 9
if (score > 9) {
  console.log('Rank: S')
} else if (score > 7) {
  console.log('Rank: A')
} else if (score > 5) {
  console.log('Rank: B')
} else if (score > 3) {
  console.log('Rank: C')
} else if (score > 1) {
  console.log('Rank: D')
} else {
  console.log('Rank: E')
}
