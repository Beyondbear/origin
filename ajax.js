let xhr=new XMLHttpRequest();

xhr.open('get','url','true') //true 异步 false同步
xhr.onreadystatechange=()=>{
    if(xhr.readyState===4){
        if(xhr.status>=200&&xhr<300||xhr.status===304){
            console.log('sucess')
        }
    }
}