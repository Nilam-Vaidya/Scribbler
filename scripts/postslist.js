<<<<<<< HEAD
function openDeleteConfirmationModal(postId) {

    document.getElementById('delete-confirmation-modal').setAttribute('data-post-id', postId);

    document.getElementById('delete-confirmation-modal').style.display = 'block';
}


function closeDeleteConfirmationModal() {
    document.getElementById('delete-confirmation-modal').style.display = 'none';
}


function deletePost(postId) {

    closeDeleteConfirmationModal();

    const postElement = document.getElementById(postId);
        if (postElement) {
            postElement.remove();
            console.log(`Post with ID ${postId} has been deleted.`);
        } else {
            console.error(`Post with ID ${postId} not found.`);
        }

    console.log(`Post with ID ${postId} will be deleted.`);
}



document.getElementById('post-one-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-one');
});

document.getElementById('post-two-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-two');
});

document.getElementById('post-three-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-three');
});

document.getElementById('post-four-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-four');
});

document.getElementById('post-five-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-five');
});

document.getElementById('yesbtnid').addEventListener('click', function() {
    const postId = document.getElementById('delete-confirmation-modal').getAttribute('data-post-id');
    deletePost(postId);
});

document.getElementById('nobtnid').addEventListener('click', function() {
    closeDeleteConfirmationModal();
});

function redirectToPostPage() {
    window.location.href='post.html';
}



=======
function openDeleteConfirmationModal(postId) {

    document.getElementById('delete-confirmation-modal').setAttribute('data-post-id', postId);

    document.getElementById('delete-confirmation-modal').style.display = 'block';
}


function closeDeleteConfirmationModal() {
    document.getElementById('delete-confirmation-modal').style.display = 'none';
}


function deletePost(postId) {

    closeDeleteConfirmationModal();

    const postElement = document.getElementById(postId);
        if (postElement) {
            postElement.remove();
            console.log(`Post with ID ${postId} has been deleted.`);
        } else {
            console.error(`Post with ID ${postId} not found.`);
        }

    console.log(`Post with ID ${postId} will be deleted.`);
}



document.getElementById('post-one-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-one');
});

document.getElementById('post-two-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-two');
});

document.getElementById('post-three-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-three');
});

document.getElementById('post-four-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-four');
});

document.getElementById('post-five-trash').addEventListener('click', function() {
    openDeleteConfirmationModal('post-five');
});

document.getElementById('yesbtnid').addEventListener('click', function() {
    const postId = document.getElementById('delete-confirmation-modal').getAttribute('data-post-id');
    deletePost(postId);
});

document.getElementById('nobtnid').addEventListener('click', function() {
    closeDeleteConfirmationModal();
});

function redirectToPostPage() {
    window.location.href='post.html';
}



>>>>>>> 93a8aaf97f1383a1fc11b8c8498f695f4d3fbe37
