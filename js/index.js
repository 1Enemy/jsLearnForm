let baseData = [];
let obj1 = {}

document.querySelector('#btnSingIn').addEventListener('click', function(){
    
    obj1.username = document.querySelector('#inp1').value
    obj1.password = document.querySelector('#inp2').value
    baseData.push(obj1)
    console.log(baseData)
})



document.querySelector('#btnGo').addEventListener('click', function(){
    baseData.forEach(item=>{
        for(let key in item){
                document.getElementById('obj').innerHTML += `
                <div style='padding-left:20px;'>${key}: ${item[key]}</div>
            `
        }
    })    
})



document.querySelector('#newBtnObj').addEventListener('click', function(){
    let objName = document.querySelector('#objName').value
    let objVal = document.querySelector('#objVal').value
    let obj2 = {}

    obj2[objName] = objVal
    
    const keys = Object.keys(obj2);
    keys.forEach(key => {
        document.getElementById('obj').innerHTML += `<div style='padding-left:20px;'>${key}: ${obj2[key]}</div>`
        console.log(obj1);
        console.log(obj2);
    });
    Object.assign(obj1, obj2)
})