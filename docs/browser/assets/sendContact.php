<?php
include 'api.inc';

//CHANGE THIS APIKEY WITH YOUR REAL STATE APIKEY 
$auth = new TokkoAuth('5940ea45eb7cfb55228bec0b958ea9c0be151757');

$data = array(
        'text' => $_REQUEST['message'] ,
        'name' => $_REQUEST['name'],
        'email' => $_REQUEST['email'],
        'cellphone' => $_REQUEST['cellphone'],
        'phone' => $_REQUEST['phone'],
        'tags' => array('mysite.com','my first landing','google'),
);

//Send Tokko property ID as 'property' if you wish send a specific property
if ($_REQUEST['property']){
    $data['properties'] = array($_REQUEST['property']);
}

//Send Tokko development ID as 'development' if you wish send a development
if($_REQUEST['development']){
    $data['developments'] = array($_REQUEST['development']);
}

$webcontact = new TokkoWebContact($auth, $data);
$response = $webcontact->send();
?>