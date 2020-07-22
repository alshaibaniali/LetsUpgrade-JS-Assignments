const student = {
        name: "Helsinki",
        age: 24,
        projects: {
            dicegames: "Two Player Dice game using Javascript"
        }
    }
    // Destructuring an object is supports in Modern Javascript

const { name, age, projects: { dicegames } } = student;

console.log(`${name} age is ${age}. He like to play ${dicegames}`);