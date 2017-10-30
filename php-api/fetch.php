<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$json_path = 'E:/www/vue-test-api/data.json';

if(is_file($json_path)) {
    $f = fopen($json_path, 'r') or die('Unable to open file!');
    $content = fread($f, filesize($json_path));
    fclose($f);
    if($content) {
        echo json_encode(array(
            'code' => 0,
            'message' => 'success',
            'data' => json_decode($content, TRUE)
        ));
    } else {
        echo json_encode(array(
            'code' => 0,
            'message' => 'no content',
            'data' => array()
        ));
    }
} else {
    echo json_encode(array(
        'code' => 0,
        'message' => 'no file',
        'data' => array()
    ));
}
