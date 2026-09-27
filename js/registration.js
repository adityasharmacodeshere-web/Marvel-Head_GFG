const form = document.querySelector('#registration-form'), message = document.querySelector('#form-message');
form.addEventListener('submit', e => { e.preventDefault(); form.reset(); message.textContent = 'Clearance requested. Check your inbox, spacefarer.'; });
