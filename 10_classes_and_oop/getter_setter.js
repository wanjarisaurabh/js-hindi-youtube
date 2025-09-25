class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
// set email(value){
//     this.email = value; // ❌ This will call the setter again → infinite loop
// } // when we use hitesh.email means getemail that'why this become infinite loop 

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
hitesh.email = "saurabh@gmaial.com"
console.log(hitesh.email);