// Object destructure
const person = {name: "Jack William", age:17, job:"Gamer", hobbies: "Reading", address: "Washington Street", phone: '017171122', friends: ["Johnny", "Jimmy", "Brian", "Billy"]};

//const hobbies = person.hobbies;
//const phone = person.phone;
const { phone, hobbies, address } = person;

const complexObject= {
    name: 'Franklin',
    info: {
        country : 'Canada',
        address : 'British Columbia'
    }
}

const {country} = complexObject.info;

console.log(person.hobbies);
console.log(hobbies, phone, address);
console.log(country);

// Array Destructure
const friends = ['William', 'Koriandr', 'Robin', 'Damien', 'Jason'];
const [firstFriend, nextFriend, ...restFriends] = friends;
console.log(firstFriend, nextFriend);
console.log(restFriends);
