import java.util.Scanner;

public class simpleInterest {
    public void simple(){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter principle amount : ");
        int principle=sc.nextInt();
        System.out.println("enter number of months : ");
        int month=sc.nextInt();
        System.out.println("enter the rate of interest ");
        float rate=sc.nextFloat();
        float interest=(principle*month*rate)/100;
        System.out.println("Simple interest "+interest);
    }
}
