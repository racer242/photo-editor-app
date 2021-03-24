<?php

  $str_json = file_get_contents('php://input');
  $obj_json = json_decode($str_json, true);

  $image_file_name = md5(uniqid(rand(), true)).'.png';

  file_put_contents($image_file_name, file_get_contents($obj_json['image']));

  $result=array(
    "image"=>$obj_json['image'],
    "data"=>$obj_json['x']." ".$obj_json['y']." ".$obj_json['scale'],
    "url"=>$image_file_name
  );

  echo json_encode($result);

?>
