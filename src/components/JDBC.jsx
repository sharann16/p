import React from 'react'

const JDBC = () => {
  const code = `public class JDBCOperations {

    static final String DB_URL = "jdbc:mysql://localhost:3306/testdb";
    static final String USER = "root";
    static final String PASS = "";   // put your password here if set

    public static void main(String[] args) {

        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            connection = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("Connected to the database...");

            statement = connection.createStatement();

            String createTableSQL = "CREATE TABLE IF NOT EXISTS Employees (" +
                    "ID INT AUTO_INCREMENT PRIMARY KEY, " +
                    "Name VARCHAR(50), " +
                    "Age INT, " +
                    "Department VARCHAR(50))";

            statement.executeUpdate(createTableSQL);
            System.out.println("Table created.");

            String insertSQL = "INSERT INTO Employees (Name, Age, Department) VALUES " +
                    "('Alice', 30, 'HR'), " +
                    "('Bob', 25, 'IT'), " +
                    "('Charlie', 35, 'Finance')";

            statement.executeUpdate(insertSQL);

            System.out.println("Listing records...");
            resultSet = statement.executeQuery("SELECT * FROM Employees");

            while (resultSet.next()) {
                System.out.println(
                        resultSet.getInt("ID") + " | " +
                        resultSet.getString("Name") + " | " +
                        resultSet.getInt("Age") + " | " +
                        resultSet.getString("Department"));
            }

            statement.executeUpdate("DELETE FROM Employees WHERE Name='Alice'");

            System.out.println("After Deletion...");
            resultSet = statement.executeQuery("SELECT * FROM Employees");

            while (resultSet.next()) {
                System.out.println(
                        resultSet.getInt("ID") + " | " +
                        resultSet.getString("Name") + " | " +
                        resultSet.getInt("Age") + " | " +
                        resultSet.getString("Department"));
            }

            resultSet.close();
            statement.close();
            connection.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Goodbye!");
    }
}`;
  
  return (
    <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
      <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap", }}>
        {code}
      </pre>
    </div>
  )
}

export default JDBC

