class ShoppingCart{
    constructor(){
      this.total=0;
      this.items={};
    }
    addItem(item_name,quantity,price){
        var totalCost=quantity*price;
        this.total=this.total+totalCost;
        this.items[item_name]=quantity;
    }
    removeItem(item_name,quantity,price){
        if(this.items[item_name]<quantity){
            this.total=this.total-(this.items[item_name]*price);
            this.items.Remove(item_name);
        }
        else{
            this.total=this.total-(quantity*price);
            this.items[item_name]=this.items[item_name]-quantity;
        }
    }
    checkout(cash_paid){
        var changeDue='';
        if(cash_paid>=this.total){
            changeDue=cash_paid-this.total;
        }else{
            changeDue='Cash paid not enough';
        }
      return changeDue;
    }
  }
  class Shop extends ShoppingCart{
    constructor(){
      super();
      this.quantity=100;
    }
    removeItem(){
        this.quantity--;
    }
  }
