    var inputs = document.getElementById("userinput2");

    var uls= document.getElementsByTagName("ul")[0];

    inputs.addEventListener("keypress",function(event){

    var newli= document.createElement("li")
    var hr1= document.createElement("hr")
    var checkb = document.createElement("input")
    checkb.type = "checkbox"

    if (event.key=="Enter")   
    {
    if(inputs.value !== ""){

  
    newli.append(document.createTextNode(inputs.value), checkb,hr1);

    uls.append(newli)
    inputs.value = ""
    }

    else if (inputs.value !== "null")
    {alert ("input value")};
    }
    });

