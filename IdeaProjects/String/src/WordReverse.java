import java.util.*;
public class WordReverse {
    static void senrev(String str){
        String[] split=str.split(" ");
        for (int i=0;i<split.length;i++){
            split[i] = reverse(split[i]);
        }
        System.out.println(String.join(" ", split));
    }
    static String reverse(String str){
        String rev=new String();
        for(int i=0;i<str.length();i++){
            rev=str.substring(i,i+1) + rev;
        }
        return rev+" ";
    }
}
