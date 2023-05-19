document.addEventListener('click',showNavFunction)

function showNavFunction(ele){
    if(ele.target.closest('#navControl')){
        document.querySelector('.ulNav').classList.toggle('showNav')
    }
    if(ele.target.closest('.ulNav')){
        document.querySelector('.ulNav').classList.toggle('showNav')
    }
    if(document.querySelector('.ulNav').classList.contains('showNav')){
        document.getElementById('navControl').innerHTML='<ion-icon name="close-circle-outline"></ion-icon>'
        document.getElementById('navControl').style.cssText='background:red;width: 46px'
    }else{
        document.getElementById('navControl').innerHTML='<ion-icon name="menu-outline"></ion-icon>'
        document.getElementById('navControl').style.cssText='background:#FF9800;width: 36px'
    }
}