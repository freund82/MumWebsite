var cart={};

$(document).ready(function(){
loadGoods();
});

function loadGoods(){
    $.getJSON('catalog.json', function (data){
        console.log(data);
var out='';
for (var key in data){
        out+='<div class="single-goods">';
        out+='<p>'+'Код тура: '+data[key]['id']+'</p>';
        out+='<p>'+data[key]['Land']+'</p>';
        out+='<a href="'+(data[key]['URL'])+'">'+(data[key]['Hotel'])+'</a>';
        //out+='<p>'+data[key]['Hotel']+'</p>';
        out+='<p>'+data[key]['Date']+'</p>';
        if(data[key]['Nights']<5){
            out+='<p>'+data[key]['Nights']+' Ночи'+'('+ data[key]['Meal']+')'+'</p>';
        } else{
            out+='<p>'+data[key]['Nights']+' Ночей'+'('+ data[key]['Meal']+')'+'</p>';
        }
        
        out+='<p>Цена: '+data[key]['Price']+".руб"+"*"+'</p>';
        out+='<p class="add-to-cart" data-art="'+(data[key]['id'])+'">Заказать тур можно по телефону:<a class="phone" href="tel:+7(495)741-34-34">+7(495)741-34-34</a></p>'
        //out+='<button class="add-to-cart" data-art="'+(data[key]['id'])+'">Купить</button>'
        out+='</div>'
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}
function addToCart(){
    var articul=$(this).attr('data-art');
    if(cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul]=1;
    }
    
    console.log(cart);
}