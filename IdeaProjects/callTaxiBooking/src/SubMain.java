import java.util.Scanner;

public class SubMain {
    public void submain(Storage detail){
        Scanner sc=new Scanner(System.in);
        System.out.println("welcome to new ");
        System.out.println("1)user registration \n2)user login\n 3)taxi history");
        System.out.println("Enter your option");
        byte opt=sc.nextByte();
        switch (opt){
            case 1:
                UserRegister newuser=new UserRegister();
                newuser.register(detail);
                break;
            case 2:
                UserLogin login=new UserLogin();
                login.userlogin(detail);
                break;
            case 3:

                TaxiHistory th=new TaxiHistory();
                th.taxihis(detail);
        }
    }
}
