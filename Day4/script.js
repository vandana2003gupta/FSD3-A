function validate() {
    let username = document.getElementById("fun").value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById("result");
    if (username == "admin") {
      if (pass == "admin") {
        p1.innerText = "Validated";
      } else {
        p1.innerText = "Invalid Password";
      }
    } else {
      p1.innerText = "Invalid Username";
    }
  }