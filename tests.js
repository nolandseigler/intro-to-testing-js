// describe("name for test", function() {
//     it("this is the label for this test", function() {
//         expect(test).toBeDefined(false);
//     });
//     it("to be", function(){
//         expect(test).toBe(true);
//     });
//     it("not to be", function() {
//         expect(test).not.toBe(false);
//     });
// });


// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it("should be a defined function.", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("sayHello('Jane') should return 'Hello, Jane!'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("sayHello('Alex') should return 'Hello, Alex!'", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("sayHello('Pat') should return 'Hello, Pat!'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed without args', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("helloWorld(true) should return 'Hello, World!'", function() {
        expect(helloWorld(true)).toBe("Hello, World!");
    });
    it("helloWorld(fasle) should return 'Hello, World!'", function() {
        expect(helloWorld(false)).toBe("Hello, World!");
    });
    it("helloWorld(null) should return 'Hello World!'", function() {
        expect(helloWorld(null)).toBe("Hello, World!");
    });
    it("helloWorld('') should return 'Hello World!'", function() {
        expect(helloWorld('')).toBe("Hello, World!");
    });
    it("helloWorld(2.3) should return 'Hello World!'", function() {
        expect(helloWorld(2.3)).toBe("Hello, World!");
    });
    it("helloWorld('5') should return 'Hello World!'", function() {
        expect(helloWorld("5")).toBe("Hello, World!");
    });
});
describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("isFive(null) should return false", function() {
        expect(isFive(null)).toBe(false);
    });
    it("isFive('') should return false", function() {
        expect(isFive('')).toBe(false);
    });
    it("isFive(2.3) should return false", function() {
        expect(isFive(2.3)).toBe(false);
    });
    it("isFive(-3) should return false", function() {
        expect(isFive(-3)).toBe(false);
    });
    it("isFive(-5) should return false", function() {
        expect(isFive(-5)).toBe(false);
    });
    it("isFive(-5) should return false", function() {
        expect(isFive(5.25)).toBe(false);
    });
    it("isFive(5) should return false", function() {
        expect(isFive(5)).toBe(true);
    });
    it("isFive('5') should return false", function() {
        expect(isFive('5')).toBe(true);
    });

})