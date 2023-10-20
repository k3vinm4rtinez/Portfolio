const $form = document.getElementById('form');
const $buttonMailto = document.getElementById('mimail');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:kevinmartinezcto@gmail.com?subject=${form.get('name')} - ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}