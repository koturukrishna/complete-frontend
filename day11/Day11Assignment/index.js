debugger;

// console.log(isPublished);

// let postTitle = "My First Post";
// let likesCount = 0;
// const POST_ID = "POST123";
// var isPublished = false;

// console.log(postTitle);
// postTitle = "It is updated";
// // POST_ID = "POST456"; // getting an error Assignment to const variable the const variable type we can not update / modify
// console.log(likesCount);

// console.log(postTitle);

// isPublished = true;
// console.log("IS Published After Change", isPublished);

// let storyViews = 0;
// const STORY_DURATION = 24; // hours

// {
//   // Block scope
//   let storyFilter = "Normal";
//   var storyLocation = "Hyderabad";
//   const UPLOADED_TIME = "9:00 AM";
// }

// console.log(storyLocation); // Hyderabad
// // console.log(storyFilter); // error Uncaught ReferenceError: storyFilter is not defined
// console.log(UPLOADED_TIME); // error Uncaught ReferenceError: UPLOADED_TIME is not defined

// let userName = "john_doe";
// let followerCount = 100;

// let profile = {
//   name: "John Doe",
//   age: 25,
// };

// let newUserName2 = userName;

// console.log(("New UserName", newUserName2));

// userName = "Krishna";

// console.log("updated userName", userName);
// console.log("New user Name", newUserName2);

// let profile2 = profile;

// profile.name = "shiva";

// console.log("ProfileName", profile.name);
// console.log("Profile2Name", profile2.name);
debugger;

// console.log(views); // What happens?
// console.log(likes); //  reference error can not access variable before initalization
// console.log(SHARES); // reference error can not access variable before initalization

// var views = 100;
// let likes = 50;
// const SHARES = 25;

// let postCaption = "Beautiful sunset!";
// let viewCount = 1500;
// let isLiked = false;
// let postTime;
// let oldPost = null;

// // Check type of each:
// console.log(typeof postCaption);
// console.log(typeof viewCount);
// console.log(typeof isLiked);
// console.log(typeof postTime);
// console.log(typeof oldPost);

// debugger;
// let post = {
//   id: "123",
//   text: "Hello World",
//   likes: 0,
// };

// // Try modifying:
// post.likes = 1; // Works! Why?
// post = {}; // Error! Why?
// post.shares = 0; // Works! Why?
// console.log("Post Object ", post);

// debugger;

// let x = 10;
// let y = x;
// x = 20;
// console.log(y); // What prints? Why? 10 the x and y variable point to different memory location

// const user = { name: "John" };
// user.name = "Jane"; // Works or error? it works we are changing only it's propertie value
// user = { name: "Bob" }; // Works or error? not works because it we not assign the user object
// // user object is declared with const

// console.log("user", user);

let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b.value);
