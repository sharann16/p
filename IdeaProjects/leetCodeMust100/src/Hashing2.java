import java.util.Arrays;

public class Hashing2 {
    public  void h2() {
        int[] nums = {0,5, 2};
        for (int i = 0; i < nums.length; i++) {
            if(nums[i]<nums.length&&nums[i]>0){
                if(nums[i]!=i-1){
                    int temp=nums[i];
                    nums[i]=nums[temp-1];
                    nums[temp-1]=temp;
                }
            }
        }
        for (int j=0;j<nums.length;j++){
            if (j!=nums[j]-1){
                System.out.println(j+1);
                return;
            }
        }
    }
}
