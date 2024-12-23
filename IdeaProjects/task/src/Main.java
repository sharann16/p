import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        simpleInterest sim=new simpleInterest();
        BioData bio=new BioData();
        System.out.println("1:simple intrest");
        System.out.println("2:Biodata");
        int opt=sc.nextByte();
        switch (opt){
            case 1 :
                sim.simple();
                break;
            case 2:
                bio.bio();
        }
    }
}