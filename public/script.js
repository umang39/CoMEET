

$(()=>{
    $('div.commentTab').hide()
    $('#bt').click((e)=>{
        console.log(e.target)
        $(this.element).hide()
    })
    let flag =1
    let title ;
    let obj = []
    $('.heartBtn').click(function (e){
    console.log($(this).prev().children()[0].innerText)
    if(title != $(this).prev().children()[0].innerText){
        flag = 1
        title = $(this).prev().children()[0].innerText
    }
       let v= $(this).text()
       console.log($(this))
       console.log()
    //    console.log(typeof data," ",data)
    if(flag){
        $(this).children().children().text(parseInt($(this).children().children().text()) + 1)
        flag =0
            $.post('/posts/createheart',{
                data : $(this).children().children().text(),
                postname  : $(this).prev().children()[0].innerText
            },(data)=>{
                console.log(data)
            })
    }
    else{
        $(this).children().children().text(parseInt($(this).children().children().text()) - 1)
     
        flag =1

    }
        
    })
})