<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
    document.body.style.background='red'
    window.Telegram.WebApp.setHeaderColor("#0000FF")
</script>
<h1><%= "Welcome to NUOP!" %>
</h1>
<p><a href="hello-servlet">See student info (me).</a></p>
<p><a href="info">See student info (alternative).</a></p>
<p><a href="time">Current server time.</a></p>
</body>
</html>