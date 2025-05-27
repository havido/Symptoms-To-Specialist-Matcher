const form = document.getElementById('symptom-form');
const resultDiv = document.getElementById('result');

fetch('http://localhost:3000/api/symptoms')
  .then(res => res.json())
  .then(symptoms => {
    symptoms.forEach(symptom => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" value="${symptom.id}"/> ${symptom.name}`;
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
    });
  });

document.getElementById('match-btn').addEventListener('click', () => {
  const selected = [...form.querySelectorAll('input:checked')].map(i => parseInt(i.value));
  fetch('http://localhost:3000/api/match', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symptoms: selected })
  })
  .then(res => res.json())
  .then(data => {
    resultDiv.innerHTML = `
      <h2>Suggested Specialist:</h2>
      <p><strong>${data.name}</strong>: ${data.description}</p>
    `;
  });
});
