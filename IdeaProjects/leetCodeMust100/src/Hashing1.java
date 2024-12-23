import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Hashing1 {
    public void hash1(){
        int[] arr={5,11,15,5};
        int target=10;
        ArrayList<Integer> al=new ArrayList<>();
        for(int j=0;j<arr.length;j++){
            int bal=target-arr[j];
            if(al.contains(bal)){
                System.out.println(al.indexOf(bal)+"  "+j);
            }else {
                al.add(arr[j]);
            }
        }

    }
}
