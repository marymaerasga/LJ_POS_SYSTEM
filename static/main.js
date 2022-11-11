// * Login Part

function Submit(){
  var user = $("#user").val();
  var password = $("#pass").val();
  if (user == "dev" && password == "password11") {
 document.cookie = "username" + "=" + user + ";" + "expires" + "=" + new Date() + ";path=/";
  document.cookie ="password" + "=" + password + ";" + "expires" + "=" + new Date() + ";path=/";
    var user = $("#user").val("");
    var password = $("#pass").val("");
    window.location.href = "/initialize";

  } else {
    alert("Please check your username and password");
        var user = $("#user").val("");
        var password = $("#pass").val("");
  }
}
// * Add new Menu Item

function sendText(data){

  if (data == 1){
  
 var text = $("#menu").val();
 var description = $("#description").val();
    var domain = $("#domain").val();
    var category = $("#menu-category").val();
    var price = $("#menu-price").val();
      var station = $("#station").val();


      console.log(text,description,domain);
 if (text == "" || text == " " || description == "" || description == " " || domain == "" || domain == " " || category == "" || category == " " || price == "" || price == " " || station == "" || station == " ") {
   alert("Please Input Menu or Description");
 } else {
   console.log("im here")
   var c = "{" + ' "name" ' +  ":" + '"' + text +  '"' +  "," +  "\n" +  ' "description" ' +  ":" +  '"' +  description + '"'  +  "," +  "\n" +  ' "price" ' +  ":" +  '"' +  price + '"'  +  "," +  "\n" +  ' "category" ' +  ":" +  '"' +  category + '"'  +  "," +  "\n" +  ' "price" ' +  ":" +  '"' +  price + '"'  +  "," +  "\n" +  ' "station" ' +  ":" +  '"' +  station + '"' + "}" +  ",";
  $("#data").val($("#data").val() + "\n" + c);
 $("#menu").val("");
$("#description").val("");
   $("#menu-category").val("");
  $("#menu-price").val("");
  $("#station").val("");
   
 }
  }

  if (data == 2) {
    var description = $("#category").val();
     var domain = $("#domain-category").val();
    if (description == "" || description == " " || domain == "" || domain == " ") {
      alert("Please Input Category");

    } else {
      var c = "{" + ' "name" ' + ":" + '"' + description + '"' + "}" + ",";
      $("#data-category").val($("#data-category").val() + "\n" + c);
      $("#category").val("");
    }
  }
 
}

function Initialize(data) {

  if (data == 1){

    console.log("menu")
     var text = $("#data").val();

     if (text == "" || text == " ") {
       alert("Please Input Menu or Description");
     } else {
       var strVal = $.trim($("#data").val());
       var lastChar = strVal.slice(-1);
       if (lastChar == ",") {
         strVal = strVal.slice(0, -1);
       }

       var sample = "[" + strVal + "]";

       console.log("DOMAIN: ", $("#domain").val());
       console.log("USER: ", user);
       console.log("PASS: ", $("#pass").val());
       console.log("DATA: ", sample);

       var domain = $("#domain").val();
       var user = "dev";
       var pass = "password11";

       $.ajax({
         method: "POST",
         url: domain + "/api/Load_sample_data/?user=" + user + "&pass=" + pass,
         data: {
           data: sample,
           type: "menuitem",
         },
       });

       $("#data").val("");
        $("#domain").val("");
         $("#description").val("");
          $("#menu").val("");
     }
  }

  if(data == 2){

    console.log("Category")

    var text = $("#data-category").val();

    if (text == "" || text == " ") {
      alert("Please Input Category");
    } else {
      var strVal = $.trim($("#data-category").val());
      var lastChar = strVal.slice(-1);
      if (lastChar == ",") {
        strVal = strVal.slice(0, -1);
      }

      var sample = "[" + strVal + "]";

      console.log("DOMAIN: ", $("#domain-category").val());
      console.log("USER: ", user);
      console.log("PASS: ", $("#pass").val());
      console.log("DATA: ", sample);

      var domain = $("#domain-category").val();
      var user = "dev";
      var pass = "password11";

      $.ajax({
        method: "POST",
        url: domain + "/api/Load_sample_data/?user=" + user + "&pass=" + pass,
        data: {
          data: sample,
          type: "category",
        },
      });

      $("#data-category").val("");
      $("#domain-category").val("");
      $("#category").val("");
    }
  }

  if (data == 3) {
    var domain = $("#domain-table").val();
    var user = "dev";
    var pass = "password11";
    var quantity = $("#number").val();
      var prefix = $("#prefix").val();


    if (domain == "" || domain == " " || quantity == "" || quantity == " "|| prefix == "" || prefix == " ") {
      alert("Please Input Quantity");
    } else {
      $.ajax({
        method: "POST",
        url: domain + "/api/Load_sample_data/?user=" + user + "&pass=" + pass,
        data: {
          prefix : prefix,
          quantity: quantity,
          type: "table",
        },
      });

 
      $("#domain-table").val("");
      $("#number").val("");
      $("#prefix").val("");
    }
  }


 
}

// * Add new Menu Item
