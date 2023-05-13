// b. In another file create same class using function constructor syntax
// create objects and call showProdDetails
function Product(pname,pcost,pdesc){
    this.ProductName=pname
    this.ProductCost=pcost
    this.Productdesc=pdesc
    this.ShowPrdDetails=function(){
        console.log("Product name is ",this.ProductName)
        console.log("Product price is ",this.ProductCost)
        console.log("Product description is ",this.Productdesc)
    }

}
let obj=new Product("Pen",10,"Writting")
obj.ShowPrdDetails()