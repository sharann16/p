import java.util.*;

public class Two {
    public void two(){
        List<String> us=new ArrayList();
        us.add("syam");

        String[][] s={{"ram","syam"},{"akil","syam"},{"nikil,ram"},{"subash","ram"},{"karthik","akil"}} ;

        cou(s,us);

    }
    static int cou(String[][] s,List us){
        List uss= List.of(us);
        for(int i=0;i<uss.size();i++){

            List arr=cf(s,us);
            uss=arr;
            System.out.println(uss);

        }
//
        return 0;
    }
    static  List cf(String[][] s,List us){
        List li=new LinkedList(us);
        for(int i=0;i<s.length;i++){
            for (int j=1;j<s[i].length;j++){
                if(s[i][j].equals(us)){
                    li.add(s[i][j-1]);

                }

            }
        }
        return li;
    }
}
