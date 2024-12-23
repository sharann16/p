import java.util.Arrays;

public class array1 {
    public void a1(){
        int[] num={2,3,4,5};
        int[] num2=new int[num.length];
        int sum=1;
        for(int i=0;i<num.length;i++){
            for (int j=0;j<num.length;j++){
                if(i!=j){
                    sum*=num[j];
                }
            }
            num2[i]=sum;
            sum=1;
        }
        System.out.println(Arrays.toString(num2));

    }


}
