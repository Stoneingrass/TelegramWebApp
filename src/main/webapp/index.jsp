<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dices</title>
    <link href="css/index.css" rel="stylesheet" type="text/css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        //back button
        window.Telegram.WebApp.BackButton.hide();

        document.body.style.background = '#006600'
        window.Telegram.WebApp.setHeaderColor("#000000")
        document.write(window.Telegram.WebApp.platform)
        document.write(window.Telegram.WebApp.themeParams.text_color)
        document.body.style.color = window.Telegram.WebApp.themeParams.text_color
    </script>
</head>

<body>

<div class="button-container">
    <div onclick="document.getElementById('diceForm1').submit()">
        <form id="diceForm1" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="4">
                <span>Dice 4</span>
            </h2>
        </form>
    </div>
    <div onclick="document.getElementById('diceForm2').submit()">
        <form id="diceForm2" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="6">
                <span>Dice 6</span>
            </h2>
        </form>
    </div>
    <div onclick="document.getElementById('diceForm3').submit()">
        <form id="diceForm3" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="8">
                <span>Dice 8</span>
            </h2>
        </form>
    </div>
    <div onclick="document.getElementById('diceForm4').submit()">
        <form id="diceForm4" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="10">
                <span>Dice 10</span>
            </h2>
        </form>
    </div>
    <div onclick="document.getElementById('diceForm5').submit()">
        <form id="diceForm5" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="12">
                <span>Dice 12</span>
            </h2>
        </form>
    </div>
    <div onclick="document.getElementById('diceForm6').submit()">
        <form id="diceForm6" action="${pageContext.request.contextPath}/dices" method="GET">
            <h2>
                <input type="hidden" name="dice" value="20">
                <span>Dice 20</span>
            </h2>
        </form>
    </div>
</div>
</body>

</html>
