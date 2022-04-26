const logger = () => {
  let count = 0
  return setInterval(() => {
    console.log(`Logueando...${++count}`)
  }, 1000)
}

const intervalId = logger()

setTimeout(() => {
  clearInterval(intervalId)
}, 10000)