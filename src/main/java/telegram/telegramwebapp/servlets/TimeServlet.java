package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import telegram.telegramwebapp.db.DBConnector;

import javax.naming.NamingException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Date;

@WebServlet(name = "timeServlet", value = "/time")

public class TimeServlet extends HttpServlet {
    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Date date = new Date();
        request.setAttribute("date", date.toString());
        request.getRequestDispatcher("time.jsp").forward(request, response);
    }

    public void destroy() {
    }

}
