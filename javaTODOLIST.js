  var inputs = document.getElementById("userinput1");

  var uls= document.querySelector
  ("ul");

  inputs.addEventListener("keypress",function(event){

  var newli= document.createElement("li")
  var hr1= document.createElement("hr")
  var checkb = document.createElement("input")
  checkb.type = "checkbox"

  if (event.key=="Enter"){ alert("Are you sure you want to add task?")  
  {
  if(inputs.value !== ""){

  newli.append(document.createTextNode(inputs.value), checkb,hr1);

  uls.append(newli)
  inputs.value = ""
  }

  else if (inputs.value !== "null")
  {alert ("input value")};
  }
  }
  });


  var li = document.querySelector("li")
  var endtask = document.getElementsByTagName("ul")[0];
  endtask.addEventListener("click", function(ev){
  if(ev.target.tagName === "LI"){
  // ev.target.classList.add("cancel")
  ev.target.classList.add("delete")

  }
  }
  )

