package telegram.telegramwebapp.db;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBConnector {

    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;


    //temp
    public static void getConnection() throws SQLException, NamingException {
        if (connection == null || connection.isClosed()) {
            Context initContext = new InitialContext();
            Context envContext = (Context) initContext.lookup("java:/comp/env");
            DataSource dataSource = (DataSource) envContext.lookup("jdbc/SQLiteDB");
                connection = dataSource.getConnection();

        }

        statement = connection.createStatement();
    }



    //TODO добавить конфиг файл, в том числе адрес файла бд
    // в том числе гитигноры
    public static void connect(String dbFile) throws ClassNotFoundException, SQLException {
        connection = null;
        Class.forName("org.sqlite.JDBC");



        connection = DriverManager.getConnection(dbFile);

        statement = connection.createStatement();
    }

    public static List<Integer> getData() throws SQLException {
        resultSet = statement.executeQuery("SELECT x FROM t");

        List<Integer> list = new ArrayList<>();
        while (resultSet.next()) {
            list.add(resultSet.getInt("x"));
        }

        return list;
    }

    public static void writeData(int x, int y) throws SQLException {
        statement.execute("INSERT INTO t ('x', 'y') VALUES (" + x + "," + y + ");");
    }

    public static void closeDB() throws SQLException {
        connection.close();
        statement.close();
        resultSet.close();
    }
}