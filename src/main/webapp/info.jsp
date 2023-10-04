<%--
  Created by IntelliJ IDEA.
  User: asdfe
  Date: 14.04.2023
  Time: 11:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Student info</h1>
<p>Name: <%=request.getAttribute("name")%></p>
<p>Course: <%=request.getAttribute("course")%></p>
<p>Group: <%=request.getAttribute("group")%></p>
<p>Theme: <%=request.getAttribute("theme")%></p>
<a href="./">Go back.</a>
</body>
</html>
