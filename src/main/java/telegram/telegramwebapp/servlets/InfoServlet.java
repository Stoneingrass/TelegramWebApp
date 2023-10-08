package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import telegram.telegramwebapp.db.DBConnector;

import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "info", value = "/info")
public class InfoServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        request.setAttribute("name", "asd");
        request.setAttribute("course", "2");
        request.setAttribute("group", "AD-212");
        request.setAttribute("theme", "Android application development");
        request.getRequestDispatcher("info.jsp").forward(request, response);
    }
}
