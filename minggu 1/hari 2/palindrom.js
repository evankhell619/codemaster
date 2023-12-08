function isPalindrome(str) { 
	var rev=str.split("").reverse().join(""); 

	if(rev == str){ 
		return true
	} 
	return false
				
} 

var str1 = "tenet"; 
var str2 = "katak"; 

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 

