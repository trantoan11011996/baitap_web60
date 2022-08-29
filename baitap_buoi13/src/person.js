import React from "react"
import{createContext} from "react"
export function generateData (){
    const initData = []
    if(!localStorage.getItem('users')){
        localStorage.setItem('users',JSON.stringify(initData))
    }
} 
export function getUsers(){
    let json  = localStorage.getItem('users')
    if(!json){
        return []
    }else{
        return JSON.parse(json)
    }
}
export function RemoveAllUser(){
    console.log('remove')
    localStorage.removeItem('users')
}
const AuthContext = createContext([])
export default AuthContext