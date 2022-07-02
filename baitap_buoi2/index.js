
const main = document.getElementById('main')
const user_data = document.getElementById('list-data-user')
const error_noti = document.getElementById('error')

function getData(user){
    let user_url = `https://api.github.com/users/${user}`
    let data = fetch(user_url)
    .then((reponse)=>{
        return reponse.json()
    })
    .then((data)=>{
        return data
    })
    .catch((err)=> {
        throw err
    })
    return data
}

function listInfomationUser(userData) {

    if(userData.message){
        error_noti.innerHTML = "user can't not be found"
        user_data.innerHTML = ""
        return
    }
    error_noti.innerHTML = ""
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


    let form_user = document.getElementById('form-user')

    form_user.addEventListener('submit',async function (e){
        e.preventDefault()
        let name_user = form_user.input_user.value
        let userData = await getData(name_user)
       /// fetch cần 1 khoảng thời gian để trả ra giá trị => await sẽ chờ đến khi getData return ra giá trị thì mới chạy xuống tiếp
        form_user.input_user.value = ""
        listInfomationUser(userData)
    })

