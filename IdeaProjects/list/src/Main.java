import java.lang.Math;
import java.util.Date;

abstract class Animal{
    
}
public class Main {
    public static void main(String[] args) {
        double ann = 100000;
        double mi = ann/12;
        double mdepts = 2000;
        System.out.println(mi);

        double check = (mdepts/mi)*100;
        double checkper = check/100;
        System.out.println(Math.round(ann*checkper));
        System.out.println(check);
    }
}


































class T1{
    public void task(){
        String st = "BCD";
        for (int i = 0; i <st.length(); i++) {
            int a=st.charAt(i);
            int b=a+32;
            System.out.println((char)b);
        }
    }
}
class T2{
    public void task(){
        String ar[]={"h","e","l","l","o"};
        int length=ar.length;
        boolean[] visited = new boolean[length];
        for(int i=0;i<length;i++){
            int count=0;
            if(!visited[i]){
                count=1;
            }

            for(int j=i;j<length;j++){
                if(ar[i]==ar[j]){
                    count++;
                    visited[j]=false;
                }
            }
            System.out.println(ar[i] + (count));

        }
    }
}

class T3{
    public void task(){
        int num=153;
        int original=num;
        double sum=0;
        while(num!=0){
            int last=num%10;
            num=num/10;
            sum=sum+(Math.pow(last,3));
        }
        if(sum==original){
            System.out.println("amstrong");
        }
        else{
            System.out.println("not ");
        }
    }
}

