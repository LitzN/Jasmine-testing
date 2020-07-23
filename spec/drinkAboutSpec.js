describe ('Drink Choices', function(){
    describe('tells you what to drink', function(){
       it("should return message saying drink can't be determined")
       expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
    })
})