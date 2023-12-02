<jsp:useBean id="dice" scope="request" class="java.lang.String"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>3D</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="css/scene.css" rel="stylesheet" type="text/css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three/examples/js/loaders/GLTFLoader.js"></script>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        //back button
        window.Telegram.WebApp.BackButton.show();
        window.Telegram.WebApp.BackButton.onClick(function () {
            window.history.back();
        });


        //back button
        window.Telegram.WebApp.onEvent("backButtonClicked", function () {
            window.history.back();
        });
    </script>
</head>
<body>

<%--<div id="scene" class="scene"></div>--%>
<script id="diceScript" data-dice="${dice}" src="js/scene1.js"></script>

</body>
</html>
