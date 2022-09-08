const form = document.querySelector("#search")

form.addEventListener("submit", async function (event) {
  event.preventDefault()
  const data = new FormData(this)
  const location = Object.fromEntries(data);
  await getLocation(location)
  this.reset()
})


async function getLocation (address = "Tocantinópolis") {
  const data = await fetch(`http://localhost:3000/get/weather?address=${address}`)
  const json = await data.json()
  console.log(json)
}