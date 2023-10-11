package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "JSServlet", value = "")
public class JSServlet extends HttpServlet {


    public void init() {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        request.getRequestDispatcher("js.jsp").forward(request, response);
//        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    public void destroy() {
    }


}
