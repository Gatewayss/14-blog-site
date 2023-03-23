const postForm = document.getElementById('post-form')

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#project-name').value.trim();
   
    const blog_text = document.querySelector('#project-desc').value.trim();
  
    if (post_title && blog_text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ post_title, blog_text}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };

  postForm.addEventListener('submit', newFormHandler)
 