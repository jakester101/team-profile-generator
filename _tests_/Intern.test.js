const Intern = require("../lib/Intern");


describe("Intern", () => {
  describe("getName", () => {
    it("should return the name of the object", () => {
        const nerd = new Intern('zach', 2, 'zach@zach.com');
        const result = nerd.name; 
        const name = nerd.getName();
      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the ID of the object", () => {
        const nerd = new Intern('zach', 2, 'zach@zach.com');
        const result = nerd.id; 
        const id = nerd.getId();
      expect(result).toEqual(id);
    });
    });


    describe("getRole", () => {
        it("should return the Role of the object", () => {
            const nerd = new Intern('zach', 2, 'zach@zach.com');
            const result = nerd.constructor.name; 
            const role = nerd.getRole();
            expect(result).toEqual(role);
        });
        });


    describe("getEmail", () => {
    it("should return the email of the object", () => {
        const nerd = new Intern('zach', 2, 'zach@zach.com');
        const result = nerd.email; 
        const email = nerd.getEmail();
        expect(result).toEqual(email);
    });
    });

    describe("getSchool", () => {
        it("should return the school of the object", () => {
            const nerd = new Intern('zach', 2, 'zach@zach.com', 'KSU');
            const result = nerd.school; 
            const school = nerd.getSchool();
            expect(result).toEqual(school);
        });
        });
  
    
  
});
