const commentForm = document.getElementById('comment-form');
const deleteBtn = document.querySelector('.project-list')
const updateBtn = document.querySelector('.update-list')

const addComment = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-input').value.trim();
    const post_id = document.getElementById('post_id').value;
    
    try {
        const response = await fetch(`/api/post/${post_id}`, {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
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

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  const upButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-update')) {
      const id = event.target.getAttribute('data-update');
      

      const post_title = document.querySelector('#project-name').value.trim();
   
    const blog_text = document.querySelector('#project-desc').value.trim();

      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_title, blog_text}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(post_title, blog_text);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  }

  updateBtn.addEventListener('click', upButtonHandler)
  deleteBtn.addEventListener('click', delButtonHandler)

commentForm.addEventListener('submit', addComment);