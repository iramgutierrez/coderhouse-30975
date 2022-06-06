type TimeObject = {
  fyh: String,
  timestamp: Number
}

export const getTime = (): TimeObject => {
  return {
    fyh: new Date().toLocaleString(),
    timestamp: Date.now()
  }
}