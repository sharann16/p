import javax.xml.stream.events.DTD;
import java.sql.Date;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Scanner;
import java.time.LocalDateTime;
import java.sql.*;
import java.util.*;
public class BankingApp {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/bankingapp";
        String udernme = "root";
        String password = "0000";
        Connection db = DriverManager.getConnection(url, udernme, password);
//        ResultSet rs=null;
        try (db) {
            if (db != null) {
                System.out.println("Connected to MySQL successfully!");
            } else {
                System.out.println("Failed to connect to PostgreSQL.");
            }
            Scanner sc = new Scanner(System.in);
            HashMap<String, BankingSystem> bs = new HashMap<>();
            HashMap<String, Card> card = new HashMap<>();
            boolean a = true;
            while (a) {
                System.out.println("Welcome to IBAN\n");
                System.out.println("1)create account\n2)withdraw\n3)deposite\n4)check balance");
                int opt = sc.nextInt();
//            int accno=0;
//            Long cardno=0l;
                String accno = "";
                switch (opt) {
                    case 1:

                        Random random = new Random();
                        long randomm = random.nextLong(100, 999);
                        System.out.println("enter your Phone Number");
                        Long pno = sc.nextLong();
                        StringBuilder pho = new StringBuilder(pno.toString());
                        String raph = pho.substring(4);
                        accno = randomm + raph;
                        System.out.println("Deposite amount");
                        double bal = sc.nextDouble();
                        sc.nextLine();
                        BankingSystem bank = new BankingSystem(accno, pno, bal);
                        bs.put(accno, bank);
                        System.out.println("Account created");
                        System.out.println("Your Account NUmber : " + accno);
                        System.out.println("do you want debit card y/n");
                        String re = sc.nextLine();
                        if (re.equals("y")) {
                            Long cardrandom = random.nextLong(1000, 99999);
                            String cardno = raph + cardrandom;
                            LocalDate date = LocalDate.now().plusYears(10);
                            System.out.println("password");
                            int pass = sc.nextInt();
                            System.out.println("CARD NUMBER : " + cardno);
                            System.out.println("VALIDITY : " + date);
                            System.out.println("PASSWORD : " + pass);
                            Card car = new Card(accno, date, pass);
                            card.put(cardno, car);
                            String insert = "insert into bank(acountNumber,username,mobileNumber,cardNumber,cpassword,expiry) values (?,?,?,?,?,?)";
                            PreparedStatement st = db.prepareStatement(insert);
                            st.setLong(1, Long.parseLong(accno));
                            st.setString(2, udernme);
                            st.setLong(3, pno);
                            st.setLong(4, Long.parseLong(cardno));
                            st.setInt(5, pass);
                            st.setDate(6, Date.valueOf(date));
                            st.executeUpdate();

                        }

                        break;
                    case 2:
                        try {
                            String check = "select * from bank where acountNumber= ?";
                            PreparedStatement pst = db.prepareStatement(check);
                            pst.setLong(1, Long.parseLong(accno));
                            ResultSet r = pst.executeQuery();
                            if (r.next()) {
                                System.out.println("enter debitCard number");
                                String cardno = sc.nextLine();
                                System.out.println("enter amount multiple of 100");
                                Long amount = sc.nextLong();
                                System.out.println("enter password");
                                int pass = sc.nextInt();
                                if (card.containsKey(cardno)) {
                                    if (card.get(cardno).getPassword() == pass) {
                                        String acno = card.get(cardno).getAccno();
                                        bs.get(acno).setBalance(bs.get(acno).getBalance() - amount);
                                        System.out.println("Balance:" + bs.get(acno).getBalance());
                                    } else {
                                        System.out.println("invalid password");
                                    }
                                }
                            }else{
                                System.out.println("account not found");
                            }
                        } catch (Exception e) {
                            System.out.println(e);


                            break;
//                            case 3:
//                                sc.nextLine();
//                                System.out.println("enter account number");
//                                accno = sc.nextLine();
//                                System.out.println("deposit amount");
//                                double damo = sc.nextDouble();
//                                bs.get(accno).setBalance(bs.get(accno).getBalance() + damo);
//                                System.out.println("Balance: " + bs.get(accno).getBalance());
//
//                                break;
//                            case 4:
//                                sc.nextLine();
//                                System.out.println("enter your account number");
//                                accno = sc.nextLine();
//                                if (bs.containsKey(accno)) {
//                                    System.out.println("Balance:" + bs.get(accno).getBalance());
//                                } else {
//                                    System.out.println("no such account found");
//                                }
//                                break;

                        }
                        break;
                }
            }
        }
    }
}