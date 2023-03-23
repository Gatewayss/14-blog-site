
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
        // document.location.replace('/dashboard');
        window.location.reload()
      } else {
        alert('Failed to create project');
      }
    }
  };

  postForm.addEventListener('submit', newFormHandler)
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  