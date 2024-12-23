public class SingleCharCount {
    public int charCount(String str,char ch){
        int count=0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)==ch){
                count+=1;
            }
        }
        return count;
    }
}
