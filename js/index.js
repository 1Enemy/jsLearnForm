let baseData = [];
document.querySelector('.btn').addEventListener('click', function(){
    let inp1 = document.querySelector('#inp1').value
    let inp2 = document.querySelector('#inp2').value
    
    let obj = {
        username: inp1,
        password: inp2,
    }

    baseData.push(obj)
    console.log(baseData)

})

