class Solution {
public:
    bool isPalindrome(int x) {
        if(x<0){
            return false;
        }
        long long cont =0;
        long long temp = x;
        while(temp!=0){
            int digit = temp % 10;
            cont = cont *10 +digit;
            temp = temp /10;

        }
        return (cont== x);
        
    }
};