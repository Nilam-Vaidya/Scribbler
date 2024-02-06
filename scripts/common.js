<<<<<<< HEAD



document.addEventListener("DOMContentLoaded", function() {
    setupModal("my-modal", "signup-btn", "close");
    setupModal("my-signin-modal", "signin-btn", "close");
    
});

// function setupModal(modalId, btnId, closeBtnId) {
//     var modal = document.getElementById(modalId);
//     var btn = document.getElementById(btnId);
//     var span = document.getElementById(closeBtnId);

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
// }
function setupModal(modalId, btnId, closeBtnId, createBtnId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = document.getElementsByClassName(closeBtnId)[0];
    var createBtn = document.getElementById(createBtnId);

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    createBtn.onclick = function() {
        modal.style.display ="none";
    }
=======



document.addEventListener("DOMContentLoaded", function() {
    setupModal("my-modal", "signup-btn", "close");
    setupModal("my-signin-modal", "signin-btn", "close");
    
});

// function setupModal(modalId, btnId, closeBtnId) {
//     var modal = document.getElementById(modalId);
//     var btn = document.getElementById(btnId);
//     var span = document.getElementById(closeBtnId);

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
// }
function setupModal(modalId, btnId, closeBtnId, createBtnId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = document.getElementsByClassName(closeBtnId)[0];
    var createBtn = document.getElementById(createBtnId);

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    createBtn.onclick = function() {
        modal.style.display ="none";
    }
>>>>>>> 93a8aaf97f1383a1fc11b8c8498f695f4d3fbe37
}