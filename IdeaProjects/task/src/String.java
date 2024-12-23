public class String {
    public String convert(){
        char[] cha={'s','h','a','r','a'};
        System.out.println(carrtostring(cha));
    }
    static char[] carrtostring(char[] charr){
        java.lang.String oncad="";
        for(int i=0;i<charr.length;){
            oncad+=charr[i];
        }
        return oncad.toCharArray();
    }
}
