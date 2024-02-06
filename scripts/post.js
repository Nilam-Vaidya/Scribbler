// document.addEventListener("DOMContentLoaded" , function(){
//     var btn = this.getElementById('editbtnid');
//     btn.onclick=function(){
//         modal.display.style='block';
//     }
// });

function toggleEditMOde(){
    var titleElement = document.getElementById('titleEle');
    var textElement = document.getElementById('textele');
    var btnElement = document.getElementById('editbtnid');

    if(titleElement.isContentEditable){
        titleElement.contentEditable=false;
        textElement.contentEditable=false;
        btnElement.innerHTML="Edit  <i class='far fa-edit'></i>"
    } 
    else {
        titleElement.contentEditable=true;
        textElement.contentEditable=true;
        btnElement.innerHTML="Save  <i class='far fa-save'></i>"
    }
}



var likeCount = 0;

function toggleLikeMode() {
    likeCount++;
    var likeText = document.getElementById("likeText");
    var likeStatement = document.getElementById("likeStatement");

    if (likeCount === 1) {
        likeText.innerHTML = "Liked";
        likeStatement.innerHTML = "1 person likes this!";
    } else {
        likeText.innerHTML = "Liked";
        likeStatement.innerHTML = likeCount + " people like this!";
    }
}

function addComment() {
    var commentText = document.getElementById("commentarea").value;
    var commentsSection = document.getElementById("commentsectionid");

    if (commentText.trim() !== "") {
        var commentDiv = document.createElement("div");
        commentDiv.innerHTML = commentText;
        commentDiv.classList.add("comment");
        commentsSection.insertBefore(commentDiv, commentsSection.firstChild);
        document.getElementById("commentarea").value = "";
    }
}

function toggleCommentSection() {
    var commentSection = document.getElementById("commentSectionContainer");

    // Toggle the display property
    if (commentSection.style.display === "none") {
        commentSection.style.display = "block";
    } else {
        commentSection.style.display = "none";
    }
}

