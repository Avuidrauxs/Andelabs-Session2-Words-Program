
module.exports ={

	words :function (str){
  
			result = { };
			str = str.split(" ");
			for(var i = 0; i < str.length; ++i) {
			    if(!result[str[i]])
			        result[str[i]] = 0;
			    ++result[str[i]];
			}
			return result;
			}

};