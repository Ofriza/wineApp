/*Q1*/
function multiplyBy(){
    x = document.getElementById("firstNumber").value;
    y = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = x * y;
}
function divideBy(){
    x=document.getElementById("firstNumber").value;
    y=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML= x / y;
}

/*Q2*/
const arr = [25,10,5,2,1];
function coins(num,arr)
{
const newArr = new Array();
let sum=0;
for(let i=0; i<arr.length; i++){
    let newArr=[];
    while(arr[i]<num-sum && sum!=num){
            sum+=arr[i];
            newArr.push(arr[i]);
        }
    }
return newArr;
}

console.log(coins(46,arr));


/*Q3*/
function notRepeted(str){
    let temp=false;
    for(let i=0;i<str.length;i++){
        temp=false;
        let currI=str.charAt(i);
        for(let j=0;j<str.length;j++){
            let currJ=str.charAt(j);
            if(i!=j && currI==currJ){
                temp=true;
            }
        }
        if(temp==false){
            return currI;
        }
    }
    return 0;
}
console.log(notRepeted('abacddbec'));

/*Q5*/
function triangleStars(num){
    for(let i=0; i<num; i++){    
    for(let j=0;j<i+1;j++)  {
        console.log("*")

    }  
    console.log('\n')

    }
}
console.log(triangleStars(5));


/*Q6*/    
function sumEqualTarget(arr,num){
	
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr.length; j++){
			if(i!=j && arr[i]+arr[j]==num){
				let newArr=[];
				newArr.push(arr[i]);
				newArr.push(arr[j]);
				
			}
		
		}
		return newArr;
	}

}

/*Q8*/
function strip_html_tags(str){
    var newStr;
    for(let i=0;i<str.length; i++){
        if(str.charAt(i)==='<'){
            temp=i;
            newStr=str.charAt(i);
            for(let j=temp+1; j<str.length; j++){
                newStr+=str.charAt(j);
            if(str.charAt(j)==='>'){
                str=str.replace(newStr,'');
            }
            else if(str.charAt(j)==='<'){
                str=str.replace(newStr,'');
            }
        }
        }
    }
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

/*Q9*/
function isUpper(str){
    if(str.charAt(0)>="A" && str.charAt(0)<="Z"){
        return true;
    }
    else{
        return false;
    }
}
console.log(isUpper("Abc"));

/*Q10*/
function is_IP(str)
{
 ip =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  
        if (ip.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}
console.log(is_IP("198.156.23.5"));


