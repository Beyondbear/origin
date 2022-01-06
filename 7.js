function $(id){
    return document.getElementById(id);
}
function deleteUser(e){
    e.parentNode.parentNode.remove();

}
function df(){
    $('tb').firstElementChild.remove();


}
function dl(){
    $('tb').lastElementChild.remove();

}
function checkAll(){
    let items=document.getElementsByName('item');
    for(let item of items){
        item.checked=$("all").checked;
    }
}
function checkItem(){
    $("all").checked=true;
    let items=document.getElementsByName('item');
    for(let item of items){
        if(!item.checked){
            $("all").checked=false;
            break;
        }
    }
}
function deleteMultiple(){
    let items=document.getElementsByName('item');
    for(let i=0;i<items.length;i++){
        if(items[i].checked){
            items[i].parentNode.parentNode.remove();
            i--;
        }
    }
    if(!document.getElementsByName('item').length){
        $("all").checked=false;
    }
}
function addUser(){
    let tr=document.createElement("tr");
    let tdChk=document.createElement("td");
    let tdName=document.createElement("td");
    let tdAge=document.createElement("td");
    let tdSex=document.createElement("td");
    let tdPhone=document.createElement("td");
    let tdDelete=document.createElement("td");
    let chkDelete=document.createElement("input");
    let btnDelete=document.createElement('button');
    chkDelete.type='checkbox';
    chkDelete.name='item';
    chkDelete.onchange=function (){
        $("all").checked=true;
        let items=document.getElementsByName('item');
        for(let item of items){
            if(!item.checked){
                $("all").checked=false;
                break;
            }
        }
    }
    btnDelete.onclick=function (){
        this.parentNode.parentNode.remove();
    };
    tdChk.appendChild(chkDelete);
    tdName.innerHTML=$('name').value;
    tdAge.innerHTML=$('age').value;
    tdSex.innerHTML=$('m').checked?$('m').value:$('f').value;
    tdPhone.innerHTML=$('phone').value;
    btnDelete.innerHTML="删除";
    tdDelete.appendChild(btnDelete);
    tr.appendChild(tdChk);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdSex);
    tr.appendChild(tdPhone);
    tr.appendChild(tdDelete);
    $('tb').appendChild(tr);
    $('btnReset').click();
}