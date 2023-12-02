package telegram.telegramwebapp.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import telegram.telegramwebapp.db.DBConnector;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.SQLException;

//TODO заменить на более подходящий механизм вызова?
@WebServlet(name = "logServlet", value = "/log")
public class LogServlet extends HttpServlet {

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

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Устанавливаем тип содержимого для ответа
        response.setContentType("application/json");


        // Получаем поток для чтения данных из запроса
        BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
        StringBuilder jsonInput = new StringBuilder();
        String line;

        while ((line = reader.readLine()) != null) {
            jsonInput.append(line);
        }

        // Ваши действия с данными, например, сохранение в базу данных
        System.out.println("Принятые данные: " + jsonInput);

        // Отправляем ответ обратно на клиент
        PrintWriter out = response.getWriter();
        out.println("{\"message\":\"Данные успешно приняты на сервере.\"}");


    }

    public void destroy() {
    }
}