// const names = ['Leonardo', 'Ricardo', 'Jess', 'Jen']
// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })  
// setTimeout(shortNames, 1000)

function add(x, y, callback) {
  setTimeout(() => {
    const sum = x + y
    callback(sum)
  }, 2000)
}

add(1,4, (sum) => {
  console.log(sum)
})