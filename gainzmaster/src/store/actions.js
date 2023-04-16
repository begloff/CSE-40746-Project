import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import axios from 'axios'

const loginUser = async (context, details) => {
    //Function to login user --> will need to fetch email from users table
    const username = details.username
    const password = details.password

    var response, resp, sql

    //Need to fetch email from db
    sql = `select user_email from users where username = '${username}'`
    resp = await axios.get(`http://34.206.226.160/?sql=${sql}`)

    var email = resp.data[0][0]

    try{

        response = await signInWithEmailAndPassword(auth, email, password)

    } catch(error) {

        console.log(error)

        switch(error.code){
            case "auth/invalid-email":
                alert("Invalid email");
                return;
            case "auth/user-not-found":
                alert("You are not an authorized user");
                return;
            case "auth/wrong-password":
                alert("Incorrect password or email");
                return;
        }
    }

    router.replace({name: 'home'})

    
}

const registerUser = async (context, details) => {
    //Make an entry in the users table, and register with firebase
    const username = details.username
    const password = details.password
    const email = details.email

    var registerResponse = null

    var sql, resp

    //Things to check for
    // 1. Overlapping email addresses
    // 2. Overlapping username
    // 3. Malicious Username and Email / SQL injection

    //1
    sql = `select * from users where username = '${username}'`
    resp = await axios.get(`http://34.206.226.160/?sql=${sql}`)
    resp = resp.data
    if (resp.length){
        alert('Username already exists: please use another name')
        return
    }

    //2
    sql = `select * from users where user_email = '${email}'`
    resp = await axios.get(`http://34.206.226.160/?sql=${sql}`)
    resp = resp.data
    if (resp.length){
        alert('Email already has an account: please login or use another email')
        return
    }

    //3 --> still need to work on sql injection
    if (username.length > 100 || email.length > 100){
        alert('Username and Email must be shorter than 100 characters')
        return
    }

    //If all tests are passed, feel free to insert/create user

    try{

        registerResponse = await createUserWithEmailAndPassword(auth, email, password)

    } catch(error) {

        switch(error.code){
            case "auth/email-already-in-use":
                alert("Email already in use!");
                return
            case "auth/invalid-email":
                alert("Invalid email");
                return
            case "auth/weak-password":
                alert("Weak password");
                return
        }

    }

    //What if error occurs in between here --> not good

    sql = `insert into users (user_email, username) values ('${email}', '${username}')`
    resp = await axios.post(`http://34.206.226.160/?sql=${sql}`)
    var result = resp.data.includes('Successfully executed')
    if (!result){
        alert('Error creating user. Please try again')
        return
    }
    
    //For now, just go back to the home page
    //Need to go to authenticated page after successful creation
    if (registerResponse){
        context.commit('SET_USER',{user: registerResponse.user, username: username, email: email})
    }

    console.log(context.state.user, context.state.user_details)

    router.replace({name: 'home'})

}

const logout = async (context) => {
    await signOut(auth)

    context.commit('CLEAR_USER')

    router.replace({'name': 'login'})
}

const fetchUser = async (context, user) => {

    auth.onAuthStateChanged( async user => {

        if (user == null ){
            context.commit('CLEAR_USER')
        } else {

            var sql = `select username from users where user_email = '${user.email}'`
            var resp = await axios.get(`http://34.206.226.160/?sql=${sql}`)
        

            context.commit('SET_USER',{user: user, email: user.email, username: resp.data[0][0]})

        }
    })
}

export default{
    loginUser,
    registerUser,
    logout,
    fetchUser
}