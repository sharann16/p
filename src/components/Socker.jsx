import React from 'react'

const Socker = () => {
    const code=`Server Code:



package prg13;
import java.io.*;
import java.net.*;
public class Server {
   public static void main(String[] args) {
       try {
           // Create ServerSocket on port 12345
           ServerSocket serverSocket = new ServerSocket(12345);
           System.out.println("Server started, waiting for client connection...");
           // Accept client connection
           Socket socket = serverSocket.accept();
           System.out.println("Client connected.");
           // Input stream (receive from client)
           BufferedReader input = new BufferedReader(
                   new InputStreamReader(socket.getInputStream()));
           // Output stream (send to client)
           PrintWriter output = new PrintWriter(
                   socket.getOutputStream(), true);
           // Thread for sending messages to client
           Thread sendThread = new Thread(() -> {
               try (BufferedReader serverInput =
                            new BufferedReader(new InputStreamReader(System.in))) {
                   String serverMessage;
                   while (!(serverMessage = serverInput.readLine())
                           .equalsIgnoreCase("exit")) {
                       output.println("Server: " + serverMessage);
                   }
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           });
           sendThread.start();
           // Main thread for receiving messages from client
           String clientMessage;
           while ((clientMessage = input.readLine()) != null) {
               System.out.println(clientMessage);
           }
           // Close everything
           input.close();
           socket.close();
           serverSocket.close();
       } catch (IOException e) {
           e.printStackTrace();
       }
   }
}

Client code:
package prg13;
import java.io.*;
import java.net.*;
public class Client {
   public static void main(String[] args) {
       try {
           // Connect to server at localhost on port 12345
           Socket socket = new Socket("localhost", 12345);
           System.out.println("Connected to Server.");
           // Input stream (receive from server)
           BufferedReader input = new BufferedReader(
                   new InputStreamReader(socket.getInputStream()));
           // Output stream (send to server)
           PrintWriter output = new PrintWriter(
                   socket.getOutputStream(), true);
           // Thread for sending messages to server
           Thread sendThread = new Thread(() -> {
               try (BufferedReader clientInput =
                            new BufferedReader(new InputStreamReader(System.in))) {
                   String clientMessage;
                   while (!(clientMessage = clientInput.readLine())
                           .equalsIgnoreCase("exit")) {
                       output.println("Client: " + clientMessage);
                   }
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           });
           sendThread.start();
           // Main thread for receiving messages from server
           String serverMessage;
           while ((serverMessage = input.readLine()) != null) {
               System.out.println(serverMessage);
           }
           // Close everything
           input.close();
           socket.close();
       } catch (IOException e) {
           e.printStackTrace();
       }
   }
}

Steps :
-> new java project-> new class, (server,client),
-> 1st run server next client

Server short code:
package prg13;
import java.io.*;
import java.net.*;
public class Server {
   public static void main(String[] args) throws Exception {
       ServerSocket server = new ServerSocket(12345);
       System.out.println("Server waiting...");
       Socket socket = server.accept();
       System.out.println("Client connected");
       BufferedReader in = new BufferedReader(
               new InputStreamReader(socket.getInputStream()));
       PrintWriter out = new PrintWriter(
               socket.getOutputStream(), true);
       BufferedReader keyboard = new BufferedReader(
               new InputStreamReader(System.in));
       new Thread(() -> {
           try {
               String msg;
               while ((msg = keyboard.readLine()) != null)
                   out.println("Server: " + msg);
           } catch (Exception e) {}
       }).start();
       String message;
       while ((message = in.readLine()) != null)
           System.out.println(message);
   }
}

Client short code:
package prg13;
import java.io.*;
import java.net.*;
public class Client {
   public static void main(String[] args) throws Exception {
       Socket socket = new Socket("localhost", 12345);
       System.out.println("Connected");
       BufferedReader in = new BufferedReader(
               new InputStreamReader(socket.getInputStream()));
       PrintWriter out = new PrintWriter(
               socket.getOutputStream(), true);
       BufferedReader keyboard = new BufferedReader(
               new InputStreamReader(System.in));
       new Thread(() -> {
           try {
               String msg;
               while ((msg = keyboard.readLine()) != null)
                   out.println("Client: " + msg);
           } catch (Exception e) {}
       }).start();
       String message;
       while ((message = in.readLine()) != null)
           System.out.println(message);
   }
}
   //cloent
   package prg13;
import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) throws Exception {

        Socket socket = new Socket("localhost",12345);
        System.out.println("Connected to Server");

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

        new Thread(() -> {
            try{
                String msg;
                while((msg = keyboard.readLine()) != null)
                    out.println("Client: " + msg);
            } catch(Exception e){}
        }).start();

        String msg;
        while((msg = in.readLine()) != null)
            System.out.println(msg);
    }
}


`
  return (
     <div>
         <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
        {code}
      </pre>
      
    </div>
      
    </div>
  )
}

export default Socker
