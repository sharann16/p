import java.util.Iterator;
import java.util.Scanner;

public class TaxiHistory {
    public void taxihis(Storage storage){
        Scanner sc=new Scanner(System.in);
        System.out.println("ehter the taxi number to saw the history");
        String taxnum=sc.nextLine();
        Iterator<String > it=storage.taxi.get(taxnum).getHist().iterator();
        while (it.hasNext()){
            System.out.println(it.next());
        }
        SubMain sm=new SubMain();
        sm.submain(storage);
    }
}
