<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$json_path = 'E:/www/vue-test-api/data.json';

function todo_index($todos, $id) {
    for($i = 0, $len = count($todos); $i < $len; $i++) {
        if($todos[$i]['id'] == $id) {
            return $i;
        }
    }
    return -1;
}

function max_id($todos) {
    $max_id = 0;
    foreach($todos as $todo) {
        if($todo['id'] > $max_id) {
            $max_id = $todo['id'];
        }
    }
    return $max_id;
}

function read_file($path) {
    $f = fopen($path, 'r') or die('Unable to open file!');
    $content = fread($f, filesize($path));
    fclose($f);
    return $content;
}

function write_file($path, $content) {
    $f = fopen($path, 'w+') or die('Unable to open file!');
    fwrite($f, $content);
    fclose($f);
}

if(isset($_POST['action']) && isset($_POST['data'])) {
    $action = $_POST['action'];
    $data = $_POST['data'];
    $file_exists = is_file($json_path);
    if($file_exists) {
        $content = read_file($json_path);
        if($content) {
            $todos = json_decode($content, TRUE);
        } else {
            $todos = array();
        }
    } else {
        $todos = array();
    }

    $ret = array();

    switch ($action) {
        case 'add':
            $data = json_decode($data, TRUE);
            $id = max_id($todos) + 1;
            $data['id'] = $id;
            $todos[] = $data;
            $ret = $data;
            break;
        case 'remove':
            $index = todo_index($todos, $data);
            if($index > -1) {
                unset($todos[$index]);
                $todos = array_values($todos);
                $ret = 1;
            } else {
                $ret = 0;
            }
            break;
        case 'modify':
            $data = json_decode($data, TRUE);
            $id = $data['id'];
            $index = todo_index($todos, $id);
            $todos[$index] = $data;
            $ret = $data;
            break;
        case 'save':
            $todos = json_decode($_POST['data'], TRUE);
            $ret = $todos;
            break;
    }

    write_file($json_path, json_encode($todos));

    echo json_encode(array(
        'code' => 0,
        'message' => 'success',
        'data' => $ret
    ));
} else {
    echo json_encode(array(
        'code' => 400,
        'message' => 'parameter error',
        'data' => NULL
    ));
}
