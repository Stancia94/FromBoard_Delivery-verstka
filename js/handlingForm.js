const questionsForm = document.getElementById('anyQuestions');

function serilizeForm(formNode) {
  const data = new FormData(formNode)
  return data;
}

async function sendData(data) {
  return await fetch('/api/apply/', {
    method: 'POST',
    body: data,
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const data = serilizeForm(event.target);
  const response = await sendData(data);
}

function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  formNode.querySelector('button').disabled = !isValid;
}
questionsForm.addEventListener('input', checkValidity)
questionsForm.addEventListener('submit', handleFormSubmit);