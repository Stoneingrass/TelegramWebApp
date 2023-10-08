<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
    document.body.style.background = '#006600'
    window.Telegram.WebApp.setHeaderColor("#0000aa")
    document.write(window.Telegram.WebApp.platform)
    document.write(window.Telegram.WebApp.themeParams.text_color)
    document.body.style.color = window.Telegram.WebApp.themeParams.text_color

</script>
<h1><%= "Welcome to NUOP!" %>
</h1>
<p><%=request.getAttribute("x")%></p>
<p><a href="hello-servlet">See student info (me).</a></p>
<p><a href="info">See student info (alternative).</a></p>
<p><a href="time">Current server time.</a></p>
</body>
</html>