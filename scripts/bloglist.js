document.addEventListener("DOMContentLoaded", function() {

    var modal = document.getElementById("createpostbtnmodalid");
    // var btn =document.getElementById("createpostbtn");
    var span =document.getElementsByClassName("close")[0];
        
    // btn.onclick=function(){
    //     modal.style.display="block";
    // }
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Open Create Post Modal
    document.getElementById('createpostbtnmodalid').addEventListener('click', function() {
        document.getElementById('createpostbtnmodalid').style.display = 'block';
    });

    // Close Create Post Modal
    document.getElementById('closebutton').addEventListener('click', function() {
        document.getElementById('closebutton').style.display = "none";
    });

});


document.addEventListener("DOMContentLoaded", function() {
    setupModal("createpostbtnmodalid", "closebutton", "closebutton","closebutton");
});

// function setupModal(modalId, btnId, closeBtnId, createBtnId) {
//     var modal = document.getElementById(modalId);
//     var btn = document.getElementById(btnId);
//     var span = document.getElementsByClassName(closeBtnId)[1];
//     var createBtn = document.getElementById(createBtnId);

//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
//     createBtn.onclick = function() {
//         modal.style.display ="none";
//     }
// }


// document.addEventListener('click', function () {
//     document.getElementById("createpostbtnmodalid").style.display='none';
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var modal = document.getElementById("createpostbtnmodalid");
//     var btn =document.getElementById("createPostButtonModal");
//     var span =document.getElementById("close")[1];

//     btn.onclick=function(){
//         modal.style.display="block";
//     }
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
// });

