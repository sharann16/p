public class BankingSystem {
    private String accountNumber;
    private Long phoneNumber;
    private double balance;


    BankingSystem(String accountNumber,Long PhuneNumber,double balance){
        this.accountNumber=accountNumber;
        this.phoneNumber=PhuneNumber;
        this.balance=balance;
    }

    public String getaccountNumber(){
        return accountNumber;
    }
    public Long getuserPhone(){
        return phoneNumber;
    }
    public double getBalance(){
        return balance;
    }
    public void setBalance(double Balance){
        this.balance=Balance;
    }
}
