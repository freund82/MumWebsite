<?php
$name="maxim";


$na=isset($_GET['name']) ? $_GET['name'] : $_POST['name'];



if ($na==$name) {
  echo 'pass';
} else {
  echo 'fail';
}

?>