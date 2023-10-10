package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import telegram.telegramwebapp.db.DBConnector;

import javax.naming.NamingException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Date;

//TODO заменить на более подходящий механизм вызова?
@WebServlet(name = "startServlet", value = "/start")
public class StartServlet extends HttpServlet {

    public void init() {
        //db connect
        try {
            DBConnector.connect("jdbc:sqlite:resources/db/db.sqlite");
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        try {
            request.setAttribute("x", DBConnector.getData0());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    public void destroy() {
    }
}