let ul=document.querySelector('#ul')


function restart(){
    $.get('/data',(data)=>{
        $("#ul").empty()
        for(let i in data){
            let li=document.createElement('li')
           li.textContent=data[i]
           ul.appendChild(li)
         
        //    $('ul').append(`<li>${data[i]}</li>`) its also done by jquery

        }
    })

    
}
restart()
$('#btn').on('click',()=>{

let inp=$('#num').val();
console.log(inp,"sdjf");
$.post('/data',{inp},(res)=>{
    console.log(res,"yhi hai");
        //    $('ul').append(`<li>${inp}</li>`)// its also done by jquery
$('#num').val('');
     
        restart()
})
})

// function send(){
// let num=document.getElementById('num')
// console.log(num.value);
// let li=document.createElement('li')
// li.textContent=num.value
// ul.appendChild(li)
// }
// $('ul').append(`<li>${data[i]}</li>`)

