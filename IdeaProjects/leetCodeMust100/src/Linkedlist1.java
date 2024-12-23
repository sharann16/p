import java.util.LinkedList;

public class Linkedlist1 {
    public  void llist(){
        int[] l={2,3,1,4,6,5};
        LinkedList<Integer> list=new LinkedList<>();
        for(int i:l){
            list.add(i);
        }

        System.out.println(list.reversed());

    }
}
