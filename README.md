# Frontend Mentor - Newsletter sign-up form with success message

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/Frontend%20Mentor%20-%20Newsletter%20sign-up%20form%20with%20success%20message.png.jpg)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learn some css properties who see for execute valid or not valid form: 

input:not(:focus):invalid {
    color: var(--Tomato);
    border: 1px solid var(--Tomato);
  }
  
  input:not(:focus):invalid {
    color: var(--Tomato);
    border: 1px solid var(--Tomato);
  }
 .form-group > .error {
    grid-row: 1;
    grid-column: 2;
    text-align: end;
    color: var(--Tomato);
    display: none;
  }
  
  .form-group > :not(:focus):invalid + .error {
    display: block;
  }
  
  .form-group.with-error-field {
    grid-template-columns: 1fr 1fr;
  }
  
  .form-group.with-error-field > input {
    grid-column: 1 / -1;
  }

  And learn the way for create pop-up and success message with JS, which is fantastic. Here is the code :

  const form = document.getElementById('form');

const newsletter_cta = document.querySelector(".newsletter-cta");
const newsletter_cta_sucess = document.querySelector(".newsletter-cta-sucess");

function handleSubmit(e) {
    e.preventDefault();

    newsletter_cta.classList.add("hide");
    newsletter_cta_sucess.classList.remove("hide");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
};

form.addEventListener('submit', handleSubmit);

### Continued development

I want to increase my Js Knowledge and master it and A more css properties.

### Useful resources

- [Example resource 1](https://youtu.be/Z0duh-0xJ2Y?si=lKzd2DD7IfQzAK-m) - This helped me for valid or invalid messge in thhe form. I really liked this pattern and will use it going forward.
- [Example resource 2](https://youtu.be/AF6vGYIyV8M?si=DGC17vGwVO6sw3nS) - This is an amazing video which helped me finally understand way to do  pop-up in JS . I'd recommend it to anyone still learning this concept.

## Author

- Website - [Abdoulaye I](https://www.your-site.com)
- Frontend Mentor - [Abdoulaye223](https://www.frontendmentor.io/profile/Abdoulaye223)