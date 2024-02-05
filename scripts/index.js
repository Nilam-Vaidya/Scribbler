document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("my-modal");
    var btn = document.getElementById("signup-btn");
    var span = document.getElementsByClassName("close")[0];

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
});

document.getElementById("signup-link").addEventListener("click", function() {
    document.getElementById("my-modal").style.display = "block";
    document.getElementById("my-signin-modal").style.display = "none";
});


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("my-signin-modal");
    var btn = document.getElementById("signin-btn");
    var span = document.getElementsByClassName("close")[1];

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
    
});

document.getElementById("createpostbtn").addEventListener("click", function() {
    window.location.href = "./html/bloglist.html";
});

document.getElementById("allpostbtn").addEventListener("click", function() {
    window.location.href = "./html/postslist.html";
});