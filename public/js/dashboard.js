const postForm = document.getElementById('post-form')
// const deleteBtn = document.querySelector('.project-list')
// const updateBtn = document.querySelector('.update-list')

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#project-name').value.trim();
   
    const blog_text = document.querySelector('#project-desc').value.trim();
    
  
    if (post_title && blog_text) {
      const response = await fetch(`/api/post`, {
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

  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/post/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert('Failed to delete post');
  //     }
  //   }
  // };

  // const upButtonHandler = async (event) => {
  //   if(event.target.hasAttribute('data-update')) {
  //     const id = event.target.getAttribute('data-id');

  //     const response = await fetch(`/api/post/${id}`, {
  //       method: 'UPDATE',
  //     });

  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert('Failed to update post');
  //     }
  //   }
  // }

  // updateBtn.addEventListener('click', upButtonHandler)
  // deleteBtn.addEventListener('click', delButtonHandler)
  postForm.addEventListener('submit', newFormHandler)
 