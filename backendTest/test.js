import axios from 'axios'

// var sql = "select * from exercises where exercise_name = USERINPUT:h'drop table exercises; --END"
// var sql = "select * from exercises where exercise_name = USERINPUT:abcdh'scsldkc' drop table exercisesEND"
const x = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`)

console.log(x.data)