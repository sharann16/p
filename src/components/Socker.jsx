import React from 'react'

const Socker = () => {
    const code=`

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
