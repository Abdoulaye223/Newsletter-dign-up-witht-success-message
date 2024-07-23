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
