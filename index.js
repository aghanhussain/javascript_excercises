
//         ######### Task1 ##########
// Install Node.js and VS Code on your computer.

console.log("Hello World")

//         ######### Task2 ##########
//Personal Message: Store a person’s name in a variable, 
// and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, 
// would you like to learn some Python today?”
var personName="muhammad ahmed"
console.log("Hello " + personName +", would you like to learn some Python today?")

//         ######### Task3 ##########
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
console.log(personName.toUpperCase())
console.log(personName.toLowerCase())
var string = personName.split(" ")
upperCasePersoneName = ""
for (var i = 0; i < string.length; i++) {
    upperCasePersoneName +=  string[i].charAt(0).toUpperCase() + string[i].slice(1)+ " "
}
console.log(upperCasePersoneName)


//         ######### Task4 ##########
// Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

quote = "\"A person who never made a mistake never tried anything new.\""
console.log("Albert Einestein once said, " + quote)


//         ######### Task5 ##########
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s 
// name in a variable called famous_person. Then compose your message and store 
// it in a new variable called message. Print your message.
famousPersonName = "Albert Einestein"
console.log(famousPersonName + " once said, " + quote)


//         ######### Task6 ##########
// Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the name 
// is displayed. Then print the name after striping the white spaces.

friendsName = "\tMuhammad Ibrahim Hassan\n"
console.log(friendsName)
console.log(friendsName.trim())


//         ######### Task7 ##########
// Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations 
// in print statements to see the results.
console.log("Result of 4 + 4 is   ",4+4)
console.log("Result of 12 - 4 is  ",12-4)
console.log("Result of 4 * 2 is    " +4*2)
console.log("Result of 1024/128 is " +1024/128)



//         ######### Task8 ##########
// You should create four lines that look like this:

// console.log(5 + 3)
console.log(5+3)
console.log(12-4)
console.log(2*4)
console.log(16/2)


//         ######### Task9 ##########
// Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.

var favouriteNum = 9
console.log("My favourite number is " + favouriteNum)


//         ######### Task10 ##########
// Adding Comments: Choose two of the programs you’ve written, 
// and add at least one comment to each. If you don’t have anything 
// specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.


var favouriteNum = 9
// favouriteNum is a variable that holds a integer value 9
console.log("My favourite number is " + favouriteNum)
// console.log print the arguments given to it on console

//         ######### Task11 ##########
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

friends = ["Asad", "Qasim", "Saad", "Farwa", 'Raazia']
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends[3])
console.log(friends[4])

//             ######### Task12 ##########
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

console.log("You are welcome "+ friends[0])
console.log("You are welcome "+ friends[1])
console.log("You are welcome "+ friends[2])
console.log("You are welcome "+ friends[3])
console.log("You are welcome "+ friends[4])


//             ######### Task13 ##########
// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

transportations = ["Motorbike", "Bicycle", 'Horse', 'Helicopter']
console.log("One of my favourite means of transportation is "+ transportations[0])
console.log("Riding a "+ transportations[1] + " helps me releasing my stress.")
console.log("Its my dream having arabic " + transportations[2] + " in my transportation means")
console.log("My dream transportation is "+ transportations[3])


//             ######### Task14 ##########
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message to 
// each person, inviting them to dinner.

guests = ["Asad", "Qasim", "Saad"]
console.log("My friends "+ guests[0]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[1]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[2]+ " you are invited to dinner at my home")


//             ######### Task15 ##########
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
            // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

            // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

            // • Print a second set of invitation messages, one for each person who is still in your list.

console.log(guests[1] + " unable to join the dinner")
guests[1]="Nasir"
console.log(guests)
console.log("My friends "+ guests[1]+ " you are invited to dinner at my home")


//             ######### Task16 ##########
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guests.splice(0,0,"Umer")
guests.splice(0,0,"Kamil")
guests.splice(0,0,"Jamal")
console.log(guests)
console.log("My friends "+ guests[0]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[1]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[2]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[3]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[4]+ " you are invited to dinner at my home")
console.log("My friends "+ guests[5]+ " you are invited to dinner at my home")



//             ######### Task17 ##########
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
            // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

            // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

            // • Print a message to each of the two people still on your list, letting them know they’re still invited.

            // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("You can now invite only two guests as new dinner table wont arive in time for dinner")
console.log(guests.pop() + " sorry i cant invite you for the dinner")
console.log(guests.pop() + " sorry i cant invite you for the dinner")
console.log(guests.pop() + " sorry i cant invite you for the dinner")
console.log(guests.pop() + " sorry i cant invite you for the dinner")

console.log(guests[0] + " you are still invited to the dinner")
console.log(guests[1] + " you are still invited to the dinner")

guests.pop()
guests.pop()
console.log(guests)


//             ######### Task18 ##########
// Seeing the World: Think of at least five places in the world you’d like to visit.
        // • Store the locations in a array. Make sure the array is not in alphabetical order.

        // • Print your array in its original order.

        // • Print your array in alphabetical order without modifying the actual list.

        // • Show that your array is still in its original order by printing it.

        // • Print your array in reverse alphabetical order without changing the order of the original list.

        // • Show that your array is still in its original order by printing it again.

        // • Reverse the order of your list. Print the array to show that its order has changed.

        // • Reverse the order of your list again. Print the list to show it’s back to its original order.

        // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

        // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


        favourite_places = ["California", "Switzerland", "Pakistan", "Paris",'Dubai']
        console.log(favourite_places)
        console.log(favourite_places.slice(0).sort())
        console.log(favourite_places)

        console.log(favourite_places.slice().reverse())
        console.log(favourite_places)

        console.log(favourite_places.reverse())
        console.log(favourite_places.reverse())

        console.log(favourite_places.sort())
        console.log(favourite_places)
        console.log(favourite_places.reverse())
        
        //             ######### Task19 ##########
        // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
    
        guests = ["Asad", "Qasim", "Saad"]
        console.log(guests.length +  " guests are invited to dinner")

        
        //             ######### Task20 ##########
        // Think of something you could store in a array. 
        // For example, you could make a list of mountains, rivers, countries, cities, 
        // languages, or anything else you’d like. Write a program that creates a list containing these items.
        
        
        cities = ["Karachi","Lahore", "Queta", "Islamabad","Multan", "Sialkot"]
       
       
       
        //             ######### Task21 ##########
        // They think of something you could store in a JavaScript Object. 
        // Write a program that creates Objects containing these items.

        emp={id:102,name:"Shyam Kumar",salary:40000}

        
        //             ######### Task22 ##########
        // Intentional Error: If you haven’t received an array index error in one of
        //  your programs yet, try to make one happen. 
        // Change an index in one of your programs to produce an index error. 
        // Make sure you correct the error before closing the program.

        console.log(guests[3])
        console.log(guests[0])


        //             ######### Task23 ##########
        // Conditional Tests: Write a series of conditional tests. 
        // Print a statement describing each test and your prediction for the results of 
        // each test. Your code should look something like this:

                // let car = 'subaru';
                
                // console.log("Is car == 'subaru'? I predict True.")
                
                // console.log(car == 'subaru')
                
        // • Look closely at your results, and make sure you understand why each 
        // line evaluates to True or False.
        
        // • Create at least 10 tests. Have at least 5 tests evaluate to True and 
        // another 5 tests evaluate to False.
        let age  =100
        let city = "Karachi"
        let course  = "Metaverse"
        let fee  = "Paid"
        let car = "Honda"
        let room = "Empty"
        let system = "Corei5"
        let marks = 95
        let weight = 60
        console.log("if age >100? I predict true")
        console.log(age > 100)

        console.log("if city is ahore? I predict false")
        console.log(city == "Lahore")

        console.log("if fee  isUnpaid? I predict false")
        console.log(fee == "Paid")

        console.log("if course  isMetaverse? I predict true")
        console.log(course == "Metaverse")

        console.log("if car is Suzuki? I predict false")
        console.log(car == "Honda")
        
        console.log("if room is empty? I predict true")
        console.log(room == "empty")

        console.log("if system is corei7? I predict true")
        console.log(car == "corei5")

        console.log("if marks > 90 ? I predict true")
        console.log(marks >=90)
        console.log("if weight is 70? I predict false")
        console.log(car == 50)



//             ######### Task24 ##########
        //         More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
                // • Tests for equality and inequality with strings

                // • Tests using the lower case function

                // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

                // • Tests using "and" and "or" operators

                // • Test whether an item is in a array

                // • Test whether an item is not in a array

    // if (city=="Karachi"){
    //     console.log("City is Karachi")
    // }

    if (city !== "karachi")
    {
        console.log("City is not Karachi")
    }
    if (age==100){
        console.log("Oldaged")
    }
    if (age!=70){
        console.log("Young")
    }
    if (age >= 100){
        console.log("oldaged1")
    }
    if (age <= 1000){
        console.log("young1")
    }
    if ((age==100) || (age>=100))
    {
        console.log("Yahooo")
    }

    if ((marks==100) || (marks>=90))
    {
        console.log("Yahooo mrks")
    }

    if (guests.includes("Asad")){
        console.log("Asad is in guest list")
    }

    if (!guests.includes("Nasir")){
        console.log("Nasir is in not guest list")
    }
    


    //             ######### Task25 ##########
    // Alien Colors #1: Imagine an alien was just shot down in a game. 
    // Create a variable called alien_color and assign it a value of 
    // 'green', 'yellow', or 'red'.
    // • Write an if statement to test whether the alien’s color is green. 
    // If it is, print a message that the player just earned 5 points.
    
    // • Write one version of this program that passes the if test and another that fails. 
    // (The version that fails will have no output.)
    alien_color = 'green'
    if (alien_color == 'green'){
        console.log("Player has earned 5 points")
    }

    if (alien_color == 'red'){
        console.log("Player has earned 5 points")
    }



//             ######### Task26 ##########
    //     Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
            //     and write an if-else chain.
            // • If the alien’s color is green, print a statement that the player 
            // just earned 5 points for shooting the alien.

            // • If the alien’s color isn’t green, print a 
            // statement that the player just earned 10 points.

            // • Write one version of this program that runs the if block and another that runs 
            // the else block.

        alien_color = "red"
        if (alien_color=="green"){
            console.log("Player has just earned 5 points for shooting the alien")
        }
        else{
            console.log("Player has just earned 10 points for shooting the alien")
        }

        if (alien_color=="red"){
            console.log("Player has just earned 10 points for shooting the alien")
        }
        else{
            console.log("Player has just earned 5 points for shooting the alien")
        }



//             ######### Task27 ##########
        //         Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
                    // • If the alien is green, print a message that the player earned 5 points.

                    // • If the alien is yellow, print a message that the player earned 10 points.

                    // • If the alien is red, print a message that the player earned 15 points.

                    // • Write three versions of this program, making sure each message is printed for the appropriate color alien.

                    if (alien_color=="yellow"){console.log("the player earned 10 points")}
                    else if (alien_color=="red"){console.log("the player earned 15 points")}
                    else{
                        console.log("the player earned 5 points")
                    }

//             ######### Task28 ##########
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
                        // • If the person is less than 2 years old, print a message that the person is a baby.
                        
                        // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
                        
                        // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
                        
                        // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
                        
                        // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
                        
                        // • If the person is age 65 or older, print a message that the person is an elder.


                        age = 15

                        if (age < 2){console.log("Person is a baby")}
                        else if ((age > 2) && (age <4 ))  {console.log("Person is a toddler")}
                        else if ((age > 4) && (age <13 ))  {console.log("Person is a kid")}
                        else if ((age > 13) && (age <20 ))  {console.log("Person is a teeanger")}
                        else if ((age > 20) && (age <65 ))  {console.log("Person is a adult")}
                        else if (age > 65) {console.log("Person is a elder")}



                        //             ######### Task29 ##########
// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check 
// for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain
//  kind of fruit is in your array. If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!

fav_fruits = ["apple", "mangoe", "peach", "bananas"]
if (fav_fruits.includes("mangoe")){
    console.log("your favourite fruit is here in list")
}

if (!fav_fruits.includes("mangoe")){
    console.log("your favourite fruit is not here in list")
}
if (fav_fruits.includes("apple")){
    console.log("your favourite fruit is here in list")
}

if (!fav_fruits.includes("apple")){
    console.log("your favourite fruit is not here in list")
}
if (fav_fruits.includes("peach")){
    console.log("your favourite fruit is here in list")
}

if (!fav_fruits.includes("peach")){
    console.log("your favourite fruit is not here in list")
}
if (fav_fruits.includes("bananas")){
    console.log("your favourite fruit is here in list")
}

if (!fav_fruits.includes("bananas")){
    console.log("your favourite fruit is not here in list")
}

fav_fruits = ["apple", "mangoe", "bananas"]

if (fav_fruits.includes("bananas")){
    if (fav_fruits.includes("mangoe")){
        if (fav_fruits.includes("apple")){
            console.log("You really like bananas")
        }
    }
}


//             ######### Task30 ##########
// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after 
// they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
user_names = ["nasir", 'khan', 'zia', 'ali', 'admin']

for(a=0; a<user_names.length; a++){


if (user_names[a]=='admin'){
    console.log("Hello, "+ user_names[a]+ " would you like to see a status report?")
}
else{
    console.log("Hello, "+ user_names[a]+ " thank you for logging in again.")
}
}


//             ######### Task31 ##########
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure 
// the correct message is printed.

if (user_names.length ==0){
    console.log("We really need some users to proceed")
}
else{
    for(a=0; a<user_names.length; a++){


        if (user_names[a]=='admin'){
            console.log("Hello, "+ user_names[a]+ " would you like to see a status report?")
        }
        else{
            console.log("Hello, "+ user_names[a]+ " thank you for logging in again.")
        }
        }
}

while (user_names.length>0){
    user_names.pop()

}   
console.log(user_names) 

if (user_names.length ==0){
    console.log("We really need some users to proceed")
}
else{
    for(a=0; a<user_names.length; a++){


        if (user_names[a]=='admin'){
            console.log("Hello, "+ user_names[a]+ " would you like to see a status report?")
        }
        else{
            console.log("Hello, "+ user_names[a]+ " thank you for logging in again.")
        }
        }
}

//             ######### Task32 ##########
// Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two 
// of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

current_users = ["Aman", "Fahad", "Hunain", "Zain", "Faiz", "Wali"]
new_users = ["Hassan", "Yahya", "Bari","Sahir", "Aman", "Fahad"]

for(a=0;a<new_users.length;a++){
    if (current_users.includes(new_users[a].toLowerCase()))
    {
        console.log(new_users[a] + " already in use. Supply a new user name")
    }
    else{
        console.log(new_users[a] + " available")

    }}


    //             ######### Task33 ##########
    // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
    // • Store the numbers 1 through 9 in a array.
    
    // • Loop through the array.
    
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

ordinals = [1,2,3,4,5,6,7,8,9]
for (a=0;a<ordinals.length;a++){
    if (ordinals[a]==1){
        console.log("1st")
    }
    else if (ordinals[a]==2){
            console.log("2nd")
    }
    else if (ordinals[a]==3){
        console.log("3rd")
}
else {
    console.log(ordinals[a]+ "th")
}

}

//             ######### Task34 ##########
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple statement like 
// I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, 
// that states how much you like pizza. The output should consist of three or more 
// lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
fav_pizza = ["Fajita", "Arabian", 'Creamy']
count = 0
while (count<fav_pizza.length){
console.log(fav_pizza[count])
count +=1
}

for(a=0; a<fav_pizza.length; a++){
    console.log("I like "+ fav_pizza[a]+ " pizza")
}
console.log("I like arabian pizza alot")
console.log("Arabian pizza is such a unique taste")
console.log("Arabian pizza has such a good toppings")
console.log("I really like arabian pizza alot")


//             ######### Task35 ##########
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

animals = ["Goat", 'Cat', 'Dog']
for(a=0; a<animals.length; a++){
    console.log(animals[a])
}

for(a=0; a<animals.length; a++){
    console.log("A " + animals[a]+ " would make a great pet")
}

console.log("Loving human beings is a common feature in these animals")



//             ######### Task36 ##########
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
// should be printed on the shirt. The function should print a sentence summarizing the size of the 
// shirt and the message printed on it. Call the function.

function make_shirt(size, text){
    console.log("Your shirt of "+ size+ " is ready with text "+ text)
}

make_shirt("Medium", "Metaverse")



//             ######### Task37 ##########
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_shirt(size="Large",text="I love JavaScript"){
    console.log("Your shirt of size "+ size+ " is ready with text "+ text)
}

make_shirt()
make_shirt(size="Med")
make_shirt(size="XL", "Im big enuf")



//             ######### Task38 ##########
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter  the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city,country="Pakistan"){
    console.log(city + " is in "+ country)
}
describe_city("Karachi", "Pakistan")
describe_city("Lahore", "Pakistan")
describe_city("Newyork", "Pakistan")

//             ######### Task39 ##########
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city,country){
    
    console.log(city.charAt(0).toUpperCase()+ city.slice(1)+ ", " + country.charAt(0).toUpperCase()+ country.slice(1))
}
city_country("lahore","pakistan")
city_country("NewYork","USA")
city_country("Madina","KSA")

//             ######### Task40 ##########
// Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing 
//these two pieces of information. Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name, album_title){
    album = {artist_name:artist_name, album_title:album_title}
    return album
}

album1 = make_album("Zia Khan", "Metaverse")
album2 = make_album("Nasir", "AIlove")
album3 = make_album("Fateh", "YePal")

console.log(album1)
console.log(album2)
console.log(album3)

function make_album(artist_name, album_title, tracks=""){    

    album = {artist_name:artist_name, album_title:album_title}
    if (tracks){
        album['tracks']=tracks
    }

    return album
}

album4 = make_album("Zia Khan", "Metaverse",10)
console.log(album4)

album5 = make_album("Zia Khan", "Metaverse")
console.log(album5)

//             ######### Task41 ##########
// Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
magicians = ["Peelo", "Jarry", "Potin", "Tabiry"]
function show_magician(arr){
    count = 0
    while (count<arr.length){
        console.log(arr[count])
        count +=1

    }


}
show_magician(magicians)

//             ######### Task42 ##########
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by 
// adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
function make_great(arr){
    for(a=0;a<arr.length;a++){
        arr[a]=arr[a] + " the Great"

    }
}
make_great(magicians)
show_magician(magicians)

//             ######### Task43 ##########
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
function make_great(arr){
    for(a=0;a<arr.length;a++){
        arr[a]=arr[a] + " the Great"
    
        
    }
    return arr
}
console.log(make_great(magicians.slice(0)))
console.log(magicians)


//             ######### Task44 ##########
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. //
//Call the function three times, using a different number of arguments each time.

function make_sandwitch(...items){
    console.log("You have ordered to make sandwitch with items inside")
    for (a=0;a<items.length;a++){
        console.log(items[a])
    }
}
make_sandwitch("cocumber", 'chicken', "Sauces", 'Mayoneese', 'eggs', "vegetables")
make_sandwitch("cocumber", 'chicken', "Sauces", 'Mayoneese', 'eggs')
make_sandwitch("cocumber", 'chicken', "Sauces", 'Mayoneese')
make_sandwitch("cocumber", 'chicken', "Sauces")

//             ######### Task45 ##########
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function car_info(model, manufacturer,...info){
    
    car_desc = {'manufacturer':manufacturer, "model":model}
    if (info.length>0){
        car_desc['other_info']=info
    }
    
return car_desc
}
console.log(car_info(model="Civi",manufacturer="Honda",color='blue',owner="Nasir"))
