import axios from 'axios'

sql = 'delete from log where session_id = 204; delete from sessions where session_id = 204'
const x = await axios.post(`http://34.206.226.160/hello.py?sql=${sql}`)
console.log(x.data)