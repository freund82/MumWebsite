$('#order').submit(function(){
    var formData=$('#order').serialize();
    $.get('order.php', formData, result);
    function result(data){
        alert(data);
        /*if (data === 'pass'){
            alert("Данные переданы усешно");
        } else {
            alert("Упс:(");
        }*/
    } // Конец result
}); // конец submit
