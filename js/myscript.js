const fun = () => {
  let name = document.myform.username.value;
  let password = document.myform.password.value;
  let passagain = document.myform.pass_again.value;
  let firstname = document.myform.firstname.value;
  let lastname = document.myform.lastname.value;

  if (name == "") {
    document.getElementById("demo").innerHTML = "Name Should Not Be Empty";
    return false;
  } else if (password == "") {
    document.getElementById("demo").innerHTML = "Pasword Should Not Be Empty";
    return false;
  } else if (name.length < 5 || password.length < 5) {
    document.getElementById("demo").innerHTML =
      "Name Or Password Must Be 6 Charecters";
    return false;
  } else if (passagain != password) {
    document.getElementById("demo").innerHTML = "Password Do Not Match";
    return false;
  } else if (firstname == "" && lastname == "") {
    document.getElementById("demo").innerHTML =
      "First Name or Last Name Should Not Be Empty";
    return false;
  }
  {
    alert("sucess");
    return false;
  }
};
