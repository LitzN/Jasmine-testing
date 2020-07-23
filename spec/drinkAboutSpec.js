/*
describe ('Drink Choices', function(){
    describe('tells you what to drink', function(){
       it("should return message saying drink can't be determined", function (){
       expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
       })
       it("should return message saying Drink Toddy", function(){
           expect(whatCanIDrink(3)).toBe("Drink Toddy")
       })
       it("should return message saying Drink Coke", function(){
           expect(whatCanIDrink(17)).toBe("Drink Coke")
       })
       it("should return message saying Drink Whiskey", function(){
           expect(whatCanIDrink(20)).toBe("Drink Beer")
       })
       it("should return message saying Drink Whiskey",function(){
           expect(whatCanIDrink(40)).toBe("Drink Whiskey")
       })
       it("should return message saying drink can't be determined", function(){
           expect(whatCanIDrink(131)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
       })
    })
})
*/

describe ("Whether numbers are divisible by 5 and 3", function(){
    it("when number is divisible by 5 and 3", function(){
        expect(fizzBuzz(15)).toBe("fizzBuzz")
    })
    it("when number is divisible by 3 and not 5", function(){
        expect(fizzBuzz(12)).toBe("Fizz")
    })
    it("when number is divisible by 5 and not 3", function(){
        expect(fizzBuzz(20)).toBe("Buzz")
    })
    it("when number is divisible by neither number", function(){
        expect(fizzBuzz(2)).toBe(2)
    })
    it("when input is not a number", function(){
        expect(fizzBuzz("no")).toBe("no")
    })
    it("when input is negative", function(){
        expect(fizzBuzz(-15)).toBe("fizzBuzz")
    })
})