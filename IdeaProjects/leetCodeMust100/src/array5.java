public class array5 {
    public void a5(){
        int[] arr={2,5,1,4,9};
        int tar=6;
        for(int i=0;i<arr.length;i++){
            int bal=tar-arr[i];
            for(int j=i;j<arr.length;j++){
                if(arr[j]==bal){
                    System.out.println(i+" "+j);
                }
            }
        }

    }
}
