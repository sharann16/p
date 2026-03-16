import React from 'react';

const RMI = () => {
  const code=`public interface RemoteInterface extends Remote {

String sayHello(String name) throws RemoteException;
}


public class RemoteImplementation extends UnicastRemoteObject implements RemoteInterface
{
protected RemoteImplementation() throws RemoteException {
super();
}
@Override
public String sayHello(String name) throws RemoteException {
return "Hello, " + name + "! Welcome to the RMI world.";
}
}



public class RMIServer {
public static void main(String[] args) {
try {
LocateRegistry.createRegistry(1099);
RemoteImplementation remoteObj = new RemoteImplementation();
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

25

RemoteInterface remoteObj =(RemoteInterface)
Naming.lookup("rmi://localhost/RemoteHello");
String response = remoteObj.sayHello("Alice");
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
