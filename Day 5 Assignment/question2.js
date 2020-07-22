// // class user{
//     constructor(name,age,email)
//     {
//     this.name=name;it refers to the user object(sahcin)
//     this.age=age;
//     thisemail=email;
//     this.lucoins=0;
//     this.courses=[];
//     }
//     login(){
//     consoel.log(`${this,name} has logged in`);
//     }
//     logout(){
//     consoel.log(`${this,name} has logged out`);
//     }
//     addCoins(){
//      this.luCoins++;
//     consoe..log(${this.name)has ${thisluCoins} coins});
//     return this;
//     }
//     getDetials(){
//     console.log(1Name${this.name},email is${this.email});
//     }
class user {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.courses = [];

    }
    login() {
        console.log(`${this.name} has LOGGED IN`);
    }
    logout() {
        console.log(`${this.name} has LOGGED OUT`);
    }

}

class Moderator extends user {
    //constructor(name,age,email,role){
    //  super(name,age,email);
    //this.role='Moderator';
    addCoins() {
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this
    }

    subCoins() {
        this.lucoins--;
        console.log(`${this.name} has ${this.lucoins} coins`);
    }
}
class Admin extends Moderator {
    addCourse(user, courses) {
        user.courses.push(courses);
    }
    deleteCourse(user, courses) {
        user.courses.pop(courses);

    }



}


let user1 = new Admin('sachin', 22, 's@gmail.com', 'Moderator');
let user2 = new Admin('danny', 21, 'd@gmail.com', 'Cheif Moderator');
user1.login();
user1.addCoins();
user1.addCoins();
user1.subCoins();

//let admin=new Admin;
user1.addCourse(user1, 'javascript');
user1.addCourse(user1, 'Python');
user1.addCourse(user1, 'Java');
console.log(user1.courses);
user1.deleteCourse(user1, 'Python');
console.log(user1.courses);

user1.logout();
console.log(user1);
console.log(user2);