import java.util.Scanner;

public class UserRegister {
    public  void register(Storage storage){
        Scanner sc=new Scanner(System.in);
        String name="";
        long mobileno;
        String home;
        String pass;
        System.out.println("Call taxi registration");
        System.out.println("Enter your name");
        name=sc.nextLine();
        System.out.println("Enter your mobile number");
        mobileno=sc.nextLong();
        sc.nextLine();
        System.out.println("enter your home location");
        home=sc.nextLine();
        System.out.println("set your password");
        pass=sc.nextLine();
        storage.set(name,mobileno,home,pass,storage);
        System.out.println("thank you");
        System.out.println("login with your phone number and password");
        SubMain sm=new SubMain();
        sm.submain(storage);


    }
}
