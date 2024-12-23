public class User {
    private String username;
    private long mobileno;
    private  String home;
    private String pass;

    public  User(String username,long mobileno,String home, String pass){
        this.username=username;
        this.mobileno=mobileno;
        this.home=home;
        this.pass=pass;
    }


    //get
    public   String getUsername(){return username;}
    public  long getMobileno(){return mobileno;}
    public String gethome(){return home;}
    public String getPass(){return pass;}


}
