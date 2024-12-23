import java.time.LocalDate;

public class Card {
    private String Accno;
    private LocalDate exDate;
    private int password;

    Card(String accno,LocalDate exDate,int password){
        this.Accno=accno;
        this.exDate=exDate;
        this.password=password;
    }


    public String getAccno(){
        return Accno;
    }

    public LocalDate getExDate(){
        return exDate;
    }
    public int getPassword(){
        return password;
    }
}
