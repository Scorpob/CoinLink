var JSONData;

function JsonLoad() {

  $.getJSON("data.json", function(result){
    JSONData = result;
   console.log(JSONData);
     
    // $.each(result, function(i, field){
    //     $("div").append(field + " ");
    // });
  });

}

// function loadJSON(callback) {   
    
//         var xobj = new XMLHttpRequest();
//             xobj.overrideMimeType("application/json");
//         xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
//         xobj.onreadystatechange = function () {
//               if (xobj.readyState == 4 && xobj.status == "200") {
//                 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//                 callback(xobj.responseText);
//               }
//         };
//         xobj.send(null);  
//      }
     
//      function init() {
//       loadJSON(function(response) {
//        // Parse JSON string into object
//          var actual_JSON = JSON.parse(response);
//       });
//      }





JsonLoad();


$(function() {
   $('#output').text(JSONData.firstname);
});
