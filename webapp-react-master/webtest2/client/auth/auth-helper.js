import { signout } from './api-auth.js'
const auth = { 
authenticate(jwt, cb) { //store jwt tocken cb-callback fn
    if(typeof window !== "undefined")
    sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
   },
//retreive jwt from session storage   
isAuthenticated() {
    if (typeof window == "undefined")
    return false
    if (sessionStorage.getItem('jwt'))
    return JSON.parse(sessionStorage.getItem('jwt'))
    else
    return false
   },
   clearJWT(cb) {
    if(typeof window !== "undefined")
    sessionStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
    document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
   }
}

export default auth