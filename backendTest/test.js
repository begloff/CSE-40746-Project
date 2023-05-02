import axios from 'axios'

var sql = 'delete from log where session_id = 203; delete from sessions where session_id = 203'
const x = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`)
console.log(x.data)