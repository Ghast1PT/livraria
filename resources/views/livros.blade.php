<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Livraria</title>

</head>

<body>
    <div id="root" books="{{ $books }}">
        @foreach (json_decode($books) as $book)
            
        @endforeach
    </div>

</body>

</html>

@vite('resources/js/app.js')
@vite('resources/css/app.css')
