// Password Show/Hide
function togglePassword(id){
  let input = document.getElementById(id);
  if(input.type === "password"){
    input.type = "text";
  }else{
    input.type = "password";
  }
}

// Register
function register(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(name && email && password){
    let users = JSON.parse(localStorage.getItem("proUsers")) || [];
    users.push({name,email,password});
    localStorage.setItem("proUsers", JSON.stringify(users));

    alert("Account Created Successfully!");
    window.location.href="login-pro.html";
  }else{
    alert("Fill all fields!");
  }
}

// Login
function login(){
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("proUsers")) || [];

  let user = users.find(u => u.email===email && u.password===password);

  if(user){
    localStorage.setItem("currentProUser", JSON.stringify(user));

    alert("Login Successful!");
    window.location.href="dashboard-pro.html";
  }else{
    alert("Invalid Email or Password!");
  }
}

// Show Name Dashboard
if(document.getElementById("userName")){
  let user = JSON.parse(localStorage.getItem("currentProUser"));
  if(user){
    document.getElementById("userName").innerText = user.name;
  }
}

// Logout
function logout(){
  localStorage.removeItem("currentProUser");
  window.location.href="login-pro.html";
}