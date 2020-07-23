describe("whatCanIDrink", function(){
    describe("tests what you should drink", function(){
        it("should return name of drink", function(){
            expect(whatCanIDrink(18)).toBe("Drink Coke");
        });
    });
})