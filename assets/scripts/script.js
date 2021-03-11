$('#order').submit(function(){
    var formData=$('#order').serialize();
    $.post('order.php', formData);
  alert("Заявка успешно отправлена!");
  document.getElementById('order').reset(); //очищаем данные формы после отправки
  return false; // предотвращаем переход на страницу order.php
}); // конец submit

$('#tel_contact').submit(function(){
  var ansData=$('#tel_contact').serialize();
  $.post('telContact.php', ansData);
alert("Заявка успешно отправлена!");
document.getElementById('tel_contact').reset(); //очищаем данные формы после отправки
return false; // предотвращаем переход на страницу order.php
}); // конец submit