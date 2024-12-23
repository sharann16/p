import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
    sum6();
    }


    static void num1(){



        int[] arr={0,42,4,1,0,5,0,23,43,0,8,0,6};
        for(int i=0;i<arr.length;i++){
            if(arr[i]==0){
                int b=arr[i];
                for(int j=i;j<arr.length;j++){
                    if(j!=arr.length-1)
                        arr[j]=arr[j+1];
                }
                arr[arr.length-1]=b;
            }
        }
        System.out.println(Arrays.toString(arr));
    }



    static void num2(){
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




    static int[] arr={0,0,1,1,1,2,2,3,3,4};
    static void num4(){
        for(int i=0;i<arr.length-4;i++){
            while(arr[i]==arr[i+1])
            {
                    loo(arr[i+1]);
            }
        }
        System.out.println(Arrays.toString(arr));
    }

    static void loo(int ind){
        for(int i=ind;i<=arr.length-2;i++){
            int temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= temp;
        }
    }
    static void sum6(){
        int[] num={4,3,2,1};
        int sum=0;//4322
        int n=num.length;
        for(int i=0;i<num.length;i++){
            int fnum=num[i];
            sum=(sum*10)+fnum;
        }
        int fsum=sum+1;
        while(fsum!=0){
            int last=fsum%10;
            num[n-1]=last;
            fsum=fsum/10;
            n--;

        }
        System.out.println(Arrays.toString(num));
    }
    static void sum7(){
        int[] num={9};
        int i=num.length+1;
        int num2=num[0];
        num2+=1;
        while (num2!=0){
            int last=num2%10;
            num[i]=last;
            num2=num2%10;
            i--;

        }
        System.out.println(Arrays.toString(num));


    }

}


