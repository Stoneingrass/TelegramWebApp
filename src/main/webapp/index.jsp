<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<script src="https://telegram.org/js/telegram-web-app.js"></script>

<script>
    // document.body.style.background = '#006600'
    // window.Telegram.WebApp.setHeaderColor("#0000aa")
    // document.write(window.Telegram.WebApp.platform)
    // document.write(window.Telegram.WebApp.themeParams.text_color)
    //document.body.style.color = window.Telegram.WebApp.themeParams.text_color
</script>

<script>
    const { init } = window.tmajs.sdk;

    function onInit({ mainButton, backButton }) {
        let counter = 0;

        const setCounter = (value) => {
            counter = value;

            if (counter === 0) {
                backButton.hide();
            } else {
                backButton.show();
            }

            mainButton.setText("Counter: " + counter);
        }

        backButton.on('click', () => setCounter(counter - 1));
        mainButton.on('click', () => setCounter(counter + 1));
        mainButton.setText('Click me').enable().show();
    }

    function onError(e) {
        const div = document.createElement('div');
        div.innerText = e instanceof Error ? e.message : JSON.stringify(e);

        document.body.appendChild(div);
    }

    // Initialize SDK with debug mode on.
    init({ debug: true })
        .then(onInit)
        .catch(onError);
</script>

</body>
</html>