/*
money = 7
children = 2
numberEights = 1
result = 1
remaining = 

*/

var distMoney = function(money, children){
    if (money < children) return -1

    money = money - children;
    numberEights = Math.floor(money / 7);
    result = Math.min(numberEights, children);
    remaining = money - result * 7;

    if (result + 1 < children) {
        return result;
    } else if(result + 1 > children){
        return remaining !== 0 ? children - 1 : children;
    } else {
        return remaining !== 3 ? result : result - 1;
    }
}