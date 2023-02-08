const Employee = require("../lib/Employee");


describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the object", () => {
        const nerd = new Employee('Mike', 2, 'Mike@mike.com');
        const result = nerd.name; 
        const name = nerd.getName();
      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the ID of the object", () => {
        const nerd = new Employee('Mike', 2, 'Mike@mike.com');
        const result = nerd.id; 
        const id = nerd.getId();
      expect(result).toEqual(id);
    });
    });


    describe("getRole", () => {
        it("should return the Role of the object", () => {
            const nerd = new Employee('Mike', 2, 'Mike@mike.com');
            const result = nerd.constructor.name; 
            const role = nerd.getRole();
            expect(result).toEqual(role);
        });
        });


    describe("getEmail", () => {
    it("should return the email of the object", () => {
        const nerd = new Employee('Mike', 2, 'Mike@mike.com');
        const result = nerd.email; 
        const email = nerd.getEmail();
        expect(result).toEqual(email);
    });
    });
  
    
  
});
