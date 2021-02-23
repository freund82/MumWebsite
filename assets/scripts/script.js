$('#order').submit(function(){
    var formData=$('#order').serialize();
    $.post('order.php', formData);
}); // конец submit
