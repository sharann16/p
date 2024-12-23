import org.w3c.dom.css.Counter;

import java.util.HashMap;

public class String2 {
    public  void  s2(){
        String s = "cbaebabacd";
        String p = "abc";
        HashMap<Character,Integer> cou=new HashMap<>();
        int left=0;
        int right=left+p.length()-1;
        int a=0;
        int b=0;
        int c=0;
        for (int i=left;i<right;i++){

            char ch=s.charAt(i);
            if(contains(p,ch)){
                System.out.println(s.charAt(i));
            }


        }
    }
    static   boolean contains(String p,char a){
        char aa=a;
        for (int i=0;i<p.length()-1;i++){
            char b=p.charAt(i);
            if(b==aa){
                return true;
            }
        }

        return false;
    }
}
