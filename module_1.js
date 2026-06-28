const people = [
    {
        id: 1,
        firstname: "Juan",
        lastname: "Dela Cruz",
        age: 20
    },
    {
        id: 2,
        firstname: "Maria",
        lastname: "Reyes",
        age: 18
    },
    {
        id: 3,
        firstname: "Pedro",
        lastname: "Santos",
        age: 15
    }
];

function greet(people) {
    console.log(`Hello ${people.firstname}`)
}

function displayPerson() {
    people.forEach(person => {
        console.log(person.firstname + " " + person.lastname)
    })
    
    console.log("\n")
}

function addPerson(firstname, lastname, age){
    const person = {
        id: people.length + 1,
        firstname,
        lastname,
        age,
    }
    
    people.push(person);
    
    console.log(`Added: ${firstname} ${lastname} \n`)
    
}

function updatePerson(id, firstname, lastname, age) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].id === id) {
            people[i].firstname = firstname;
            people[i].lastname = lastname;
            people[i].age = age;
            
            console.log(`Person #${id} updated \n`)
            return
        }
    }
    
    console.log(`Student not found`)
}

function deletePerson(id) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].id === id) {
            people.splice(i, 1);
            console.log(`Student # ${id} deleted \n`);
            return
        }
    }
    console.log("Student Not Found \n")
}



displayPerson()

addPerson(
    "Ana",
    "Garcia",
    21
);
    
updatePerson(
    2,
    "Maria",
    "Updated",
    19
);

deletePerson(3);
    
displayPerson()