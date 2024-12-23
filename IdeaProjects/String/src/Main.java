import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutt
public class Main {
    public static void main(String[] args) {

        int[] arr={10,2,5,3};
        LinkedList<Integer> l=new LinkedList<>();
        for(int j=0;j<arr.length;j++){
            l.add(arr[j]);
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]/2);
            if(l.contains(arr[i]/2)){
                System.out.println(true);
            }
        }
        System.out.println(false);    }

//        String s = "abcdabcbb";
//        HashSet<Character> set=new HashSet();
//        int l=0;
//        int r=0;
//        int count=0;
//        while(r<s.length()){
//            if(!set.contains(s.charAt(r))){
//                set.add(s.charAt(r));
//                r++;
//                count=Math.max(count,set.size());
//            }else {
//                set.remove(s.charAt(l));
//                l++;
//            }
//        }
//        System.out.println(count);









//        char[] cha={'s','h','a','r','a'};
//        String[] name={"hdhf","gteteye"};
//        System.out.println(cartostring4(name));
//        String sentence="helo wellcome";
//        String[] sepset={};
//        reverse("name");
//        WordReverse rev=new WordReverse();
//        Vowels vow=new Vowels();
//        SingleCharCount cou=new SingleCharCount();
//        Sort s=new Sort();
//
//
////        rev.senrev("Hi rishi epidi iruka");
////        System.out.println(cou.charCount("rishi",'i'));
////        vow.vowel();
//        s.bubble();

    }



//
//
//
//
//
//
//
//
//
//    static String carrtostring(char[] charr){
//        String oncad="";
//        for(int i=0;i<charr.length;i++){
//            oncad+=charr[i];
//        }
//        return oncad;
//    }
//    static  String cartostring2(char[] charr){
//        String concad=new String(charr);
//        return concad;
//    }
//    static  String cartostring3(char[] charr){
//        StringBuilder co=new StringBuilder();
//        String str= String.valueOf(co.append(charr));
//        return str;
//    }
//    static  String cartostring4(String[] name){
//        String tname=String.join("",name);
//
//        return tname;
//    }
//
//}