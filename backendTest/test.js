import axios from 'axios'

// var sql = "select * from exercises where exercise_name = USERINPUT:h'drop table exercises; --END"
var sql = "select * from exercises where exercise_name = USERINPUT:abcdh'scsldkc' drop table exercisesEND"
var sql2 = `insert into sessions (sdate, workout_type, user_id, name) values ('09-MAY-23', 'Push', '1', USERINPUT:Ben's Workout)END`;
const x = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`)
const y = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql2}`)

console.log(x.data)
console.log(y.data)

// #Extract value between the two
