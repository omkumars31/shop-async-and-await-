let stocks ={
    Cigg : ["Malboro Advance","Classic Regular","Ultramild","Define","Finetouch"],
    Liquid : ["Sting","Coffee","coke","Chai","water"],
    Chakna : ["Peanuts","MoongDal","Aloo Bhujiya"]
};


let is_shop_open = true;
function Time(ms){
    return new Promise((resolve,reject) =>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"));
        }
    })
}

async function PaanBhandar(){
    try{
        await Time(3000);
        console.log(`${stocks.Cigg[4]} is selected`);

        await Time(1000);
        console.log("Serving the ciggerate and lighter");

        await Time(3000);
        console.log(`${stocks.Liquid[3]}  is given to the Customer`);
        
        await Time(1000);
        console.log(`${stocks.Chakna[2]} is given to the customer`);

        await Time(4000);
        console.log("Money paid by the Customer");
    }

    
    finally{
        console.log("Day ended, Shop is CLOSED");
    }

}
PaanBhandar();


   