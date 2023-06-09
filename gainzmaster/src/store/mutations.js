const SET_USER = (state, payload) => {
    state.user = payload.user;
    state.user_details = {username: payload.username, email: payload.email}
}

const CLEAR_USER = (state) => {
    state.user = null
    state.user_details = null
}

const LOADED_PAGE = (state) => {
    state.pageLoaded = true
}

const SET_DATA = (state, payload) => {
    state.muscleData = payload.m
    state.groupData = payload.g
    state.exerciseData = payload.e
}

export default{
    SET_USER,
    CLEAR_USER,
    LOADED_PAGE,
    SET_DATA,
}