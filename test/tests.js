const assert = chai.assert;;
describe("Object Oriented Programming", function () {

    describe("ShoppingCart", function() {
        describe("Constructor", function () {
            let cart = new ShoppingCart();
            
            it("total should be 0", () => {
                assert.equal(cart.total, 0);
            });

            it("items should be an bject", () => {
                assert.typeOf(cart.items, "object");
            });
        });
        
        describe("addItem()", function () {
            let cart = new ShoppingCart();

            let itemName = "Mango";
            cart.addItem(itemName, 3, 10);
            it("price should be 30", () => {
                assert.equal(cart.total, 30);
            });

            it("added quantity should be 3", () => {
                assert.equal(cart.items[itemName], 3);
            });
        });
        
        describe("removeItem()", function () {
            let cart = new ShoppingCart();

            let itemName = "Mango";
            cart.addItem(itemName, 3, 10);
            cart.removeItem(itemName, 2, 10);
            it("price should be 10", () => {
                assert.equal(cart.total, 10);
            });

            it("added quantity should be 1", () => {
                assert.equal(cart.items[itemName], 1);
            });
        });
        
        describe("checkout()", function () {
            let cart = new ShoppingCart();

            cart.addItem("Mango", 3, 10);
            cart.addItem("Orange", 16, 10);
            
            it("balance should be 75", () => {
                assert.equal(cart.checkout(265), 75);
            });

            it("balance should be 'cash paid not enough'", () => {
                assert.equal(cart.checkout(25), "Cash paid not enough");
            });
        });
    });

    describe("Shop", function(){
        describe("Constructor", function () {
            let shop = new Shop();
            
            it("Should be instance of ShoppingCart", () => {
                assert.instanceOf(shop, ShoppingCart);
            });

            it("Should initialize 'quantity' to 100", () => {
                assert.equal(shop.quantity, 100);
            });
        });

        describe("removeItem() no args", function() {
            let shop = new Shop();
            shop.removeItem();
            shop.removeItem();
            it("2 calls should set 'quantity' to 98", () => {
                assert.equal(shop.quantity, 98);
            });
        });
    });

});