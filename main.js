const dailyBtn = document.getElementById('daily')
const weeklyyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')

const workHours = document.getElementById('work-hours')
const playHours = document.getElementById('play-hours')
const studyHours = document.getElementById('study-hours')
const exerciseHours = document.getElementById('exercise-hours')
const socialHours = document.getElementById('social-hours')
const selfHours = document.getElementById('self-care-hours')
const workPrev = document.getElementById('work-prev')

let data;

function updateHours(timeframe){
  const timeframes = data.map(item => item.timeframes[timeframe].current)

  workHours.textContent = timeframes[0];
  playHours.textContent = timeframes[1];
  studyHours.textContent = timeframes[2];
  exerciseHours.textContent = timeframes[3];
  socialHours.textContent = timeframes[4];
  selfHours.textContent = timeframes[5];
}

function updatePrev(timeframe){
  const timeframes = data.map(item => item.timeframes[timeframe].previous)

  workPrev.textContent = timeframes[0]
}

//dailyBtn.addEventListener('click', () => updateHours('daily'))

dailyBtn.addEventListener('click',function () {
  updateHours('daily');
  updatePrev('daily');
})

weeklyyBtn.addEventListener('click',function () {
  updateHours('weekly');
  updatePrev('weekly');
})

//weeklyyBtn.addEventListener('click', () => updateHours('weekly'))
monthlyBtn.addEventListener('click', () => updateHours('monthly'))

monthlyBtn.addEventListener('click',function () {
  updateHours('monthly');
  updatePrev('monthly');
})

fetch('data.json')
.then(response => response.json())
.then(jsonData => {
  data = jsonData;

  updateHours('daily');
  updatePrev('daily')
})
.catch(error => console.error('Error fetching data', error))