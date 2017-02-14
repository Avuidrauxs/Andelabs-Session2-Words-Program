/*
Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.
The function should return a JSON object showing the words identified, and their occurrences.
For example for the input `olly olly in come free`, the output should be
{
olly: 2
in: 1
come: 1
free: 1
}
*/
module.exports ={

	words :function (str){
  
			result = { };
			//This Regex checks for '\s' all whitespaces, '\n' new lines, '\t' all tabs
			str = str.replace(/[\s\n\t\r]/g," ");
			str = str.split(" ");
			for(var i = 0; i < str.length; ++i) {
				if(str[i] === "") continue;
				
			    if(!result[str[i]])
			        result[str[i]] = 0;
			    //This condition block is to catch reserved words
			    if(typeof (result[str[i]]) !== typeof (9))
			    
			    	result[str[i]] = 0;
			    
			    ++result[str[i]];
			}
			//Outputs it in a string format
			//return JSON.stringify(result);
			return result;
			}

};