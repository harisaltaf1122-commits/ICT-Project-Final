function showPage(page){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

function order(){
  let name = document.getElementById("name").value;
  if(name.trim() === ""){
    alert("Please enter your name!");
  } else {
    alert("Thank you " + name + "! Your order is placed.");
  }
}
