import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;

public class TaxiBooking {
    public  void taxi(Storage storage){
        Scanner sc=new Scanner(System.in);

        System.out.println("you ere sucess fully enter into ticket booking");

        System.out.println("Enter your booking date");
        String dt=sc.nextLine();
        System.out.println("pickup place");
        String pickplace=sc.nextLine();
        System.out.println("Drop place");
        String drop=sc.nextLine();
        Iterator <Map.Entry<String,TaxiDetails>> it= storage.taxi.entrySet().iterator();
        while (it.hasNext()){
            String key=it.next().getKey();
            if(storage.taxi.get(key).getDate().contains(dt)){
                System.out.println("this date already taken");
                continue;
            }else {
                storage.taxi.get(key).setDate(dt);
                storage.taxi.get(key).setPickupplace(pickplace);
                storage.taxi.get(key).setDropPlace(drop);
                System.out.println("your taxi number  : "+storage.taxi.get(key).getTaxiNumber());
                System.out.println("driver name  : "+storage.taxi.get(key).getDriverName());
                System.out.println("driver mobile number   : "+storage.taxi.get(key).getMobileNumber());
                System.out.println("date    :   "+dt);
                System.out.println("pickup place   :  "+pickplace);
                System.out.println("Drop place     :  "+drop);
                storage.taxi.get(key).setHist(dt +"  "+ pickplace+"  "+drop);

                break;
            }

        }
        SubMain sm=new SubMain();
        sm.submain(storage);

    }
}
