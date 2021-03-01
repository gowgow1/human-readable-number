module.exports = function toReadable (number) {
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    let arr2 = ["ten","eleven","twelve","thirteen","14","fifteen","16","17","eighteen","19"]
    let arr3 = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if (number < 10){

        return arr[number]

    }else if (number < 21){

        if (number >= 10 && number < 14){
            return arr2[number%10]
        }else if(number < 20) {
            if(number == 15){
                return arr2[5]
            }else if(number == 18){
                return arr2[8]
            }
            return arr[number%10] + "teen"
        }else{return "twenty"}

    }else if(number<100){

        let str = number+""
        if (str[1]=="0"){
            return arr3[number/10-2]
        }else{
            return arr3[Math.floor(number/10)-2]+ " " + arr[number%10]
        }

    }else if(number==100){
        return "one hundred"
    }
    else{
        let s = number+""
        if (s[1]==0){
            if (s[2]==0){
                return arr[s[0]] + " hundred" 
            }else{return arr[s[0]] + " hundred " + arr[s[2]]}
        }else if (s[2]==0){
            if (s[1]==1){
                return arr[s[0]] + " hundred " + "ten" 
            }else{
                return arr[s[0]] + " hundred " + arr3[s[1]-2]
            }
        }else{
            let f = s.slice(1,)
            if (f > 10 && f < 14){
                return arr[s[0]] + " hundred " + arr2[f % 10]
            } else if(f < 20) {
                if(f == 15){
                    return arr[s[0]] + " hundred " + arr2[5]
                }else if(f == 18){
                    return arr[s[0]] + " hundred " + arr2[8]
                }
                return arr[s[0]]+ " hundred " + arr[f%10] + "teen"
                }else if (f==20){
                    return arr[s[0]] + " hundred " + "twenty"
                }else{
                    if (f[1]=="0"){
                        return arr[s[0]]+ " hundred " + arr3[f/10-2]
                    }else{
                        return arr[s[0]]+ " hundred " +  arr3[Math.floor(f/10)-2]+ " " + arr[f%10]
                    }
                }
      }
    }

} 
