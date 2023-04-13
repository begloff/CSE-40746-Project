import axios from 'axios'

console.log('Hello')
const x = await axios.get("http://34.206.226.160/hello.py?sql=select * from exercises")
console.log(x.data)