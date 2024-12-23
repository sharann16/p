import java.util.Scanner;

public class BioData {
    public void bio(){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter sno");
        byte sno =sc.nextByte();
        sc.nextLine();
        System.out.println("enter name");
        String name=sc.nextLine();
        System.out.println("age");
        int age=sc.nextByte();
        System.out.println("enter dept");
        sc.nextLine();
        String dept=sc.nextLine();
        System.out.print("|  S.No  |     Name     |     Age     |    Department    |");
        System.out.printf("\n|  %4d  |     %4s   |    %3d      |    %9s     |",1,"sharan",20,"B.Sc CS");
    }
}
