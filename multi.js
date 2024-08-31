document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');

    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form 1 submitted: ' + document.getElementById('name1').value);
    });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form 2 submitted: ' + document.getElementById('name2').value);
    });
});
