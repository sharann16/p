import java.util.Date;
import java.util.LinkedList;
import java.util.Timer;

public class TaxiDetails {
    private  String taxiNumber;
    private  String driverName;
    private long mobileNumber;
    private LinkedList<String> date=new LinkedList<>();
    private LinkedList<Timer> time=new LinkedList<>();
    private LinkedList<String> pickupplace=new LinkedList<>();
    private  LinkedList<String> dropPlace=new LinkedList<>();
    private LinkedList<String> hist=new LinkedList<>();


    public TaxiDetails(String taxiNumber,String driverName,long mobileNumber){
        this.taxiNumber=taxiNumber;
        this.driverName=driverName;
        this.mobileNumber=mobileNumber;
    }
    public void setHist(String his){
        this.hist.add(his);
    }
    public  LinkedList<String> getHist(){
        return hist;
    }


    public  String  getTaxiNumber(){return taxiNumber;}
    public  String getDriverName(){return driverName;}
    public  long getMobileNumber(){return mobileNumber;}
    public LinkedList<String> getDate(){return date;}
    public LinkedList<Timer> getTime(){return time;}
    public LinkedList<String> getPickupplace(){return pickupplace;}
    public LinkedList<String> getDropPlace(){return dropPlace;}
    public void setDate(String date){this.date.add(date);}
    public  void setPickupplace (String pickplace){this.pickupplace.add(pickplace);}
    public void setDropPlace(String dropplace){this.dropPlace.add(dropplace);}



   public TaxiDetails(){

   }


}
