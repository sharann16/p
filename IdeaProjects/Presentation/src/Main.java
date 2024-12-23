import java.util.regex.*;
public class Main  {
     public static void main(String[] args){
         String text = "abc"; // The string "aab" matches "a.b"
         Pattern pattern = Pattern.compile("a.c]");
         Matcher matcher = pattern.matcher(text);
         System.out.println(matcher.matches());//it returns true or false
     }
}



