function profit(buyingPrice){
    let sellingPrice= 1000;
    if(buyingPrice && typeof buyingPrice=='number'){
        mProfit=sellingPrice-buyingPrice;
        return profit;
    }
    else{
        return 0;
    }
}
function displayProfit(name,buyingPrice){
    let myProfit= profit(buyingPrice);
        message= "The profit of " + name + " is " + myProfit;
    console.log(message);
}
displayProfit("3 eggs",900);
displayProfit("ghruhgui",'hfuhfuhur')