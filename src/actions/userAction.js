
const USERLIST_LOADED = 'USERLIST_LOADED'
export function userListLoaded (data) {
    return {
        type: USERLIST_LOADED,
        data
    }
}
export function getUserList() {
    return async function getUserList(dispatch) {
        
        await fetch ('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => dispatch(userListLoaded(data)))
            .catch( (error) => {
                console.log(error)
                //dispatch error handling scenario
            })
    }
}