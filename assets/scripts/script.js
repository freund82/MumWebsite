$('#order').submit(function(){
    var formData=$('#order').serialize();
    $.post('order.php', formData);
  alert("Заявка успешно отправлена!");
  document.getElementById('order').reset(); //очищаем данные формы после отправки
  return false; // предотвращаем переход на страницу order.php
}); // конец submit
