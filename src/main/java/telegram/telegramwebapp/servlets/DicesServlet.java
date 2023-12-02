package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "Dices", value = "/dices")
public class DicesServlet extends HttpServlet {


    public void init() {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String diceNumber = request.getParameter("dice");
        request.setAttribute("dice", diceNumber);

        request.getRequestDispatcher("dices.jsp").forward(request, response);
    }

    public void destroy() {
    }


}
