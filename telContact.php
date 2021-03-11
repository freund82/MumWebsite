<?php
//получаем данные в массив POST
$tel=$_POST['cont'];

//проверяем переменные на получение вредоносных символов
$tel=htmlspecialchars($tel);

//декодируем url если кто-то попытается ввесди имя сайта в форму
$tel=urldecode($tel);

//удаляем пробеллы если есть в начале и конца строки если есть
$tel=trim($tel);


// mail("maximutkin82@yandex.ru",  "Заявка с сайта",  "ФИО ".$name.".  tel: ".$tel.".  email: ".$email , "From: webhobby@maxhooktravelblog.ru \r\n");
/*mail("maximutkin82@yandex.ru",  "Запрос на звонок",  tel: ".$tel.".  "From: webhobby@maxhooktravelblog.ru \r\n");*/
/*echo "Здесь" .$tel;*/ // если добавляем текст перед переменной то текст в кавычках а перед переменной точка.
mail("maximutkin82@yandex.ru",  "Запрос звонка", "Тел:" .$tel,  "From: webhobby@maxhooktravelblog.ru \r\n");
?>


