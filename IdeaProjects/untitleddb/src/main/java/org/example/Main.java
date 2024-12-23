package org.example;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Main {

    /*
     * Complete the 'chocolateFeast' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER c
     *  3. INTEGER m
     */
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        for(int i=0;i<=num;i++){
            for(int j=i+1;j<num;j++){
                System.out.print(" ");
            }
            for(int k=i;k>0;k--){
                System.out.print("*");
            }
            System.out.println();
        }
    }




}
