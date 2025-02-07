// Global scope
let courseName = "JavaScript";

function practiceScope() {
  // Function scope
  let topic = "Variables";
  console.log(courseName + " - " + topic);

  if (true) {
    // Block scope
    let detail = "Exploring scopes";
    console.log(detail);
  }
  // console.log(detail); // Try uncommenting this
}

practiceScope();
