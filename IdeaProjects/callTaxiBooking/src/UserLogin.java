import java.util.Scanner;

public class UserLogin {
    public void userlogin(Storage storage){
        Scanner sc=new Scanner(System.in);
        System.out.println("======LOGIN======");
        System.out.println("Enter your mobile number");
        long mobileno=sc.nextLong();
        sc.nextLine();

        if(storage.userlist.containsKey(mobileno)){
            System.out.println("Enter your password");
            String pass=sc.nextLine();

            String passw=storage.userlist.get(mobileno).getPass();
            if(pass.equals(passw)){
                TaxiBooking t=new TaxiBooking();
                t.taxi(storage);
            }
            else {
                SubMain sm=new SubMain();
                sm.submain(storage);
            }
        }else {
            System.out.println("mob w");
        }



    }
}
