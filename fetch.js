fetch('url','obj')
fetch('url')
.then(response=>{if(response.ok){response.json()}else{throw new Error('')}})
.then(data=>'数据处理') //get

fetch('url',{
    method:'POST',
    body:JSON.stringify({'key':'value'}),
    Headers:{
        'Content-Type':'application/json'
    }
})//post