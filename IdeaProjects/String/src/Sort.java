import java.util.Arrays;

public class Sort {
    public void bubble(){
        String str="zhelloa";
        char[] arr=str.toLowerCase().toCharArray();
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length-i-1;j++){
                char temp;
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
