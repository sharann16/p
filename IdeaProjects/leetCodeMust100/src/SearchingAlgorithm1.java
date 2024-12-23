public class SearchingAlgorithm1 {
    public  void  sa(){
        int[] num={1,2,3,4,5,6,7,8,9};
        int target =1;
        int left=0;
        int right=num.length-1;

       while (left<=right){
           int middle=left+(right-left)/2;
           if(target==num[middle]){
               System.out.println(middle);
               return;
           }
           if(target<num[middle]){
               right=middle-1;
           }else {
               left=middle+1;
           }
       }
        System.out.println("-1");
    }
}
