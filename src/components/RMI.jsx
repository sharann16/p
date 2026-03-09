import React from 'react';

const RMI = () => {
  const code=`public interface RemoteInterface extends Remote {
// A simple method to return a greeting message
String sayHello(String name) throws RemoteException;
}


public class RemoteImplementation extends UnicastRemoteObject implements RemoteInterface
{
// Constructor
protected RemoteImplementation() throws RemoteException {
super();
}
// Implementation of the remote method
@Override
public String sayHello(String name) throws RemoteException {
return "Hello, " + name + "! Welcome to the RMI world.";
}
}



public class RMIServer {
public static void main(String[] args) {
try {
// Start the RMI registry
LocateRegistry.createRegistry(1099);
// Create an instance of the implementation class
RemoteImplementation remoteObj = new RemoteImplementation();
// Bind the remote object to a name in the RMI registry
Naming.rebind("RemoteHello", remoteObj);
System.out.println("RMI Server is running...");
} catch (Exception e) {
System.out.println("Server exception: " + e.getMessage());
e.printStackTrace();
}
}
}


public class RMIClient
{
public static void main(String[] args) {
try {
// Lookup the remote object from the RMI registry

25

RemoteInterface remoteObj =(RemoteInterface)
Naming.lookup("rmi://localhost/RemoteHello");
// Invoke the remote method
String response = remoteObj.sayHello("Alice");
// Display the response
System.out.println("Server Response: " + response);
} catch (Exception e) {
System.out.println("Client exception: " + e.getMessage());
e.printStackTrace();
}
}
}`
  return (
    <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
      <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
        {code}
      </pre>
    </div>
  )
}

export default RMI
