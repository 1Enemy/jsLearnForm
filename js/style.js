//color for site

document.getElementById('colorItem1').addEventListener('click', function(){
    document.body.style.background = "#fff"
    document.querySelectorAll('.colorItem').forEach(elem =>{
        elem.classList.remove('darkBtnRadio')
    })
    document.querySelector('.formSingIn').classList.remove('darkForm')
    document.querySelectorAll('.item').forEach(item=>{
        item.classList.remove('darkForm')
    })

    document.querySelectorAll('.btn').forEach(elem=>{
        elem.classList.remove('darkBtn')
    })
})

document.getElementById('colorItem2').addEventListener('click', function(){
    document.body.style.background = "#000"
    document.querySelectorAll('.colorItem').forEach(elem =>{
        elem.classList.add('darkBtnRadio')
    })
    document.querySelector('.formSingIn').classList.add('darkForm')
    document.querySelectorAll('.item').forEach(item=>{
        item.classList.add('darkForm')
    })

    document.querySelectorAll('.btn').forEach(elem=>{
        elem.classList.add('darkBtn')
    })
})

//form

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.formActive').style.display = 'none'
    
    if(inp1.value === "" || inp2.value === ""){
        
        document.querySelector('.formError').style.display = "block"
        document.querySelector('.err').innerHTML = "Ошибка! Введите логин или пароль"
        baseData.pop()
    }else{
        document.querySelector('.formWelcome').style.display = "block"
        document.querySelector('.welcome').innerHTML = `Добро пожаловать, ${baseData.map(item=>item.username)}`
    }

    document.getElementById('btnBack').addEventListener('click', function(){
        document.querySelector('.formActive').style.display = 'block'
        document.querySelector('.formError').style.display = 'none'
    })

    document.getElementById('btnGo').addEventListener('click', function(){
        document.querySelector('.accountForm').style.display = 'none'
        document.querySelector('.ArrayForm').style.display = 'block'

        let row = document.createElement('span')
        document.getElementById('obj').appendChild(row)
    })
})