import java.util.Arrays;
import java.util.Scanner;

public class StringChange {
    public  void string(){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter a string");

        String userStr=sc.nextLine();
        String[] sarr=userStr.split(" ");
        String s= Arrays.toString(st(sarr,0));
        System.out.println(s);
    }
    static   String[] st(String[] sarr,int i){
        int j=i;
        for(i=0;i<sarr.length-j-1;i++){
            String tem=sarr[i];
            sarr[i]=sarr[i+1];
            sarr[i+1]=tem;
        }
        if(sarr.length-j-1>=i){
            st(sarr,j+1);
        }

        return sarr;
    }
}
