class Employee{
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, role, github){
        super(name, id, email, role);
        this.github = github;
        this.role = "Engineer";
    }
}