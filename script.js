document.querySelectorAll('.purchase-btn').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.getAttribute('data-plan');
        alert(`You selected the ${plan} plan. Proceeding to payment...`);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent to InkSpires!');
});
