import query from './db.js'
import parseDoc from './utils/parseDoc.js'

const id = 'fAHeBenNTSJMPkLLf08I'
const doc = query.doc(id)

try {
  const response = await doc.get()
  const user = parseDoc(response)

  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}