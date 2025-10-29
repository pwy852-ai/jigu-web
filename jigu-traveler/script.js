async function showPlan() {
  const city = document.getElementById("citySelect").value;
  const planBox = document.getElementById("planContent");

  if (!city) {
    planBox.innerHTML = "<p>도시를 선택해주세요 🗺️</p>";
    return;
  }

  try {
    const response = await fetch("places.json");
    const data = await response.json();

    const cityData = data[city];
    if (!cityData) {
      planBox.innerHTML = "<p>해당 도시의 데이터가 없습니다 😅</p>";
      return;
    }

    planBox.innerHTML = `
      <h3>${cityData.name}</h3>
      <p>${cityData.description}</p>
      <ul>
        ${cityData.places.map(p => `<li>📍 ${p}</li>`).join('')}
      </ul>
    `;
  } catch (err) {
    planBox.innerHTML = "<p>데이터를 불러오는 중 오류가 발생했습니다 ⚠️</p>";
  }
}
