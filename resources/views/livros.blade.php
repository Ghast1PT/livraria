
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Livraria</title>
</head>

<body>
    @php
        $texto = 'teste';
        $data = encrypt_text($data);
    @endphp

    <div id="root" data="{{ $data }}">
    </div>

</body>

</html>

@vite('resources/js/app.js')
@vite('resources/css/app.css')
