import java.util.Scanner;

public class Vowels {
    public void vowel(){
        Scanner sc=new Scanner(System.in);
        String st=sc.nextLine();
        char[] cst=st.toLowerCase().toCharArray();
        int vcount=0;
        int ccount=0;
        char[] vow={'a','e','i','o','u'};
        for(int i=0;i<vow.length;i++){
            for(int j=0;j<cst.length;j++){
                if(vow[i]==cst[j]){
                    vcount++;
                }
                if (i==0 & 'a'<=cst[j] && cst[j]>'z') {
                    ccount++;
                }
            }
            
        System.out.println(vcount);
        System.out.println(ccount);
    }

}}
