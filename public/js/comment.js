const commentForm = document.getElementById('comment-form')

const addComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim();
    console.log(comment);
    if (comment) {
        const response = await fetch('/api/users/post/:id', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            response.render('blog')
        } else {
            alert(response.statusText);
        }
    }
};


commentForm.addEventListener('submit', addComment)