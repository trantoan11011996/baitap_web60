
let user = document.getElementById('input-user')
const main = document.getElementById('main')
const form_user = document.getElementById('form-user')
const user_data = document.getElementById('list-data-user')


form_user.onsubmit = function(e){
    e.preventDefault()  
    let name = form_user.input_user.value
    let url = `https://api.github.com/users/${name}`
    const fetchAPI = fetch(url)
    fetchAPI.then(reponse => {
        return reponse.json()
    }).then(user => {
        listInfomationUser(user)
    }).catch(err => {
       throw err
    })
}

function listInfomationUser(userData) {

    user_data.innerHTML =
        `
        <li>name : ${userData.name}</li>
        <li>
           <img src=${userData.avatar_url}>
        </li>
        <li>
            email : ${userData.email} 
        </li>
        <li>
            tên công ty : ${userData.company}
        </li>
        <li>
            số lượng người follow : ${userData.followers} 
        </li>
        `
    main.appendChild(user_data)
}
