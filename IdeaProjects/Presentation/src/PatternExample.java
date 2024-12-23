
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
    public class PatternExample {
        public static void main(String[] args) {
            String name;
            String phonenumber;
            System.out.println("RegularExpression - Pattern & Matchers");
            Scanner in = new Scanner(System.in);
            String np = "^[A-Za-z]+$";
            Pattern namePattern = Pattern.compile(np);
            while(true) {
                System.out.println("Enter Your Full Name:");
                name = in.next();
                Matcher namematch = namePattern.matcher(name);
                if(namematch.matches()) {
                    System.out.println("Valid Name");
                    break;
                }
                else
                    System.out.println("Invalid name. Please enter letters only.");
            }

            String pp = "^[0-9]{10}$";
            Pattern phonepattern = Pattern.compile(pp);
            while(true) {
                System.out.println("Enter Your Mobile number:");
                phonenumber = in.next();
                Matcher phonematch = phonepattern.matcher(String.valueOf(phonenumber));
                if(phonematch.matches()) {
                    System.out.println("Valid Phone Number");
                    break;
                }
                else {
                    System.out.println("Invalid Number. Please enter numbers only.");
                }
            }
            System.out.println("---------------------------");
            System.out.println("Name: "+name);
            System.out.println("Phone Number: "+phonenumber);
            in.close();
        }
    }

