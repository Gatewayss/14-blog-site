const commentForm = document.getElementById('comment-form')

const addComment = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-input').value.trim();
    const post_id = document.getElementById('post_id').value;
    //const user_id = document.getElementById('user_id').value
    try {
        const response = await fetch(`/api/posts/post/${post_id}`, {
            method: 'POST',
            body: JSON.stringify({ comment_text, user_id, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.reload()
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.error(err);
    }
};

commentForm.addEventListener('submit', addComment)