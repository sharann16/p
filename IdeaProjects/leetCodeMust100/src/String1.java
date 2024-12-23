import java.util.Arrays;

public class String1 {
    public  void string(){
        char[] arr={'h','e','l','l','o','w'};
        for(int i=0;i<arr.length/2;i++){
            int j=arr.length-1-i;
            char temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }

        System.out.println(Arrays.toString(arr));
    }
}
