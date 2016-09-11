<?php
require_once('GetResponseAPI3.class.php');
$getresponse = new GetResponse('93933c35307f429132dec062fc6d724f');
 
 
 //$idClient = '';
$add = $getresponse->addContact(array(
   'first_name'              => $_POST['first_name'],
   'email'             => $_POST['email'],
   'custom_mobile_phone'             => $_POST['custom_mobile_phone'],
   'dayOfCycle'        => 0,
   'campaign'          => array('campaignId' => $_POST['campaign_token']),
    //  'customFieldValues' => array(
    //     array('customFieldId' => 'rG5Cp',
    //         'value' => array(
    //             '380631234567'
    //         ))
    // )
));

?>