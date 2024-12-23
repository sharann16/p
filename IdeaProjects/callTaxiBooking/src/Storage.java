import java.util.HashMap;
import java.util.Locale;

public class Storage {
    HashMap<Long,User>   userlist=new HashMap<>();
    HashMap<String,TaxiDetails> taxi=new HashMap<>();

    public void  settdetail(String taxiNumber,String driverName,long mobileNumber){
        TaxiDetails td=new TaxiDetails(taxiNumber,driverName,mobileNumber);
        taxi.put(taxiNumber,td);
    }

    public void set(String username,long mobileno,String home, String pass,Storage storage){
        User use=new User(username,mobileno,home,pass);

        storage.userlist.put(mobileno,use);
    }
}