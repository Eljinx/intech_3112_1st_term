<?php
header('Content-Type: application/json; charset=utf-8');

$apiUrl = 'https://api.restful-api.dev/objects';

function send_error($message, $statusCode = 502)
{
    http_response_code($statusCode);
    echo json_encode([
        'error' => $message
    ]);
    exit;
}

$context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => "Accept: application/json\r\n",
        'timeout' => 10
    ]
]);

$response = @file_get_contents($apiUrl, false, $context);

if($response === false){
    if(!function_exists('curl_init')){
        send_error('The server could not fetch data from the external API.');
    }

    $curl = curl_init($apiUrl);

    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Accept: application/json'],
        CURLOPT_TIMEOUT => 10
    ]);

    $response = curl_exec($curl);
    $statusCode = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    $curlError = curl_error($curl);

    curl_close($curl);

    if($response === false || $statusCode >= 400){
        send_error($curlError ?: 'The server could not fetch data from the external API.');
    }
}

json_decode($response);

if(json_last_error() !== JSON_ERROR_NONE){
    send_error('The external API returned invalid JSON.');
}

echo $response;
