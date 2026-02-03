<?php
// proxy.php - Серверный прокси для обхода CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$targetUrl = 'https://keo.gov39.ru/data/schedule/klgd1548141601/class.php';
$params = [
    'class' => '6В',
    'school_uid' => 'klgd1548141601'
];

$fullUrl = $targetUrl . '?' . http_build_query($params);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $fullUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control: no-cache',
    'Pragma: no-cache'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
    echo json_encode([
        'success' => false,
        'error' => 'Failed to fetch data',
        'timestamp' => time()
    ]);
    exit;
}

// Пытаемся распарсить как JSON, если это возможно
$json = json_decode($response, true);
if (json_last_error() === JSON_ERROR_NONE) {
    echo json_encode([
        'success' => true,
        'data' => $json,
        'type' => 'json',
        'timestamp' => time()
    ]);
} else {
    // Это HTML, возвращаем как текст
    echo json_encode([
        'success' => true,
        'data' => $response,
        'type' => 'html',
        'timestamp' => time()
    ]);
}
?>
