const UserLogin = (userinfo,token,login) => ({type: "LOGIN",userinfo, token, login})

export const doUserLogin= (url,params)=>(dispatch, getState) => {
    let formData = new FormData();  
    for(let k in params){  
        formData.append(k, params[k]);  
    }  
    dispatch( 
        dispatch=>
            fetch(url, {
                method: 'POST',
                cache: 'no-cache',
                body: formData
            })
            .then((response)=> (
                response.json()
            ))
            .then((responseText)=>{
                // console.log(responseText)
                dispatch(UserLogin(responseText.data, responseText.token, true))  
            })
            .catch((error)=> {
                console.log(error)
                dispatch(UserLogin({}, "",false))  
            })
    )
}
