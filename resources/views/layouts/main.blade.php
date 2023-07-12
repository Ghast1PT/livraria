<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>

</head>

<body>
    <div id="root" @yield('props')>

    </div>

</body>

</html>

@vite('resources/js/app.js')
@vite('resources/css/app.css')
