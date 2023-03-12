let chartData = [];

function generateChartData() {
  chartData = [];
  let totalWaterUsage = 15000000;
  for (let year = 2023; year <= 2070; year++) {
    totalWaterUsage += calculateTotalWaterUsage();
    chartData.push(Math.round(totalWaterUsage));
  }
}

function calculateTotalWaterUsage() {
  const snowpack = Number(snowpackSlider.value);
  const agriculture = Number(agricultureSlider.value);
  const arizonaPopulation = Number(arizonaPopulationSlider.value);
  const californiaPopulation = Number(californiaPopulationSlider.value);
  const coloradoPopulation = Number(coloradoPopulationSlider.value);
  const newMexicoPopulation = Number(newMexicoPopulationSlider.value);
  const nevadaPopulation = Number(nevadaPopulationSlider.value);
  const utahPopulation = Number(utahPopulationSlider.value);
  const wyomingPopulation = Number(wyomingPopulationSlider.value);
  const populationGrowthRate = Number(populationGrowthSlider.value) / 100;

  const totalWaterUsage =
    36500 *
    (arizonaPopulation +
      californiaPopulation +
      coloradoPopulation +
      newMexicoPopulation +
      nevadaPopulation +
      utahPopulation +
      wyomingPopulation) *
    (1 + populationGrowthRate) *
    (1 - snowpack / 100) *
    (1 - agriculture / 100);

  return totalWaterUsage;
}

function updateChartData() {
  generateChartData();
  updateChart();
}

function updateChart() {
    const maxWaterUsage = 15000000;
  
    if (!chart) {
      chart = Highcharts.chart('chart-container', {
        title: {
          text: 'Water Levels in the American Southwest'
        },
        yAxis: {
          title: {
            text: 'Water Usage (Millions of Gallons)'
          },
          tickInterval: 1000000
        },
        xAxis: {
          categories: [
            '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
            '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038',
            '2039', '2040', '2041', '2042', '2043', '2044', '2045', '2046',
            '2047', '2048', '2049', '2050', '2051', '2052', '2053', '2054',
            '2055', '2056', '2057', '2058', '2059', '2060', '2061', '2062',
            '2063', '2064', '2065', '2066', '2067', '2068', '2069', '2070'
          ],
          max: 46 // The last index of the categories array
        },
        series: [{
          name: 'Water Usage',
          data: chartData
        }, {
          name: 'Max Water Usage',
          type: 'line',
          color: 'red',
          data: new Array(chartData.length).fill(maxWaterUsage)
        }]
      });
    } else {
      chart.update({
        title: {
          text: 'Water Levels in the American Southwest'
        },
        yAxis: {
          title: {
            text: 'Water Usage (Millions of Gallons)'
          },
          tickInterval: 1000000
        },
        xAxis: {
          categories: [
            '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
            '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038',
            '2039', '2040', '2041', '2042', '2043', '2044', '2045', '2046',
            '2047', '2048', '2049', '2050', '2051', '2052', '2053', '2054',
            '2055', '2056', '2057', '2058', '2059', '2060', '2061', '2062',
            '2063', '2064', '2065', '2066', '2067', '2068', '2069', '2070'
          ],
          max: 46 // The last index of the categories array
        },
        series: [{
          name: 'Water Usage',
          data: chartData
        }, {
          name: 'Max Water Usage',
          type: 'line',
          color: 'red',
          data: new Array(chartData.length).fill(maxWaterUsage)
        }]
      });
    }
  }
  

// Function to update population sliders
function updatePopulationSliders() {
  document.getElementById('arizona-population-slider').value = arizonaPopulation;
  document.getElementById('california-population-slider').value = californiaPopulation;
  document.getElementById('colorado-population-slider').value = coloradoPopulation;
  document.getElementById('new-mexico-population-slider').value = newMexicoPopulation;
  document.getElementById('nevada-population-slider').value = nevadaPopulation;
  document.getElementById('utah-population-slider').value = utahPopulation;
  document.getElementById('wyoming-population-slider').value = wyomingPopulation;
}

// Function to update population growth rates
function updatePopulationGrowthRates() {
  arizonaGrowthRate = document.getElementById('arizona-growth-slider').value / 1000;
  californiaGrowthRate = document.getElementById('california-growth-slider').value / 1000;
  coloradoGrowthRate = document.getElementById('colorado-growth-slider').value / 1000;
  newMexicoGrowthRate = document.getElementById('new-mexico-growth-slider').value / 1000;
  nevadaGrowthRate = document.getElementById('nevada-growth-slider').value / 1000;
  utahGrowthRate = document.getElementById('utah-growth-slider').value / 1000;
  wyomingGrowthRate = document.getElementById('wyoming-growth-slider').value / 1000;
}

// Function to update snowpack level
function updateSnowpackLevel() {
  snowpackLevel = document.getElementById('snowpack-slider').value / 100;
}

// Function to update agricultural development level
function updateAgricultureLevel() {
  agricultureLevel = document.getElementById('agriculture-slider').value / 100;
}

// Function to handle accordion button click
function handleAccordionButtonClick(event) {
  const button = event.target;
  const panel = button.nextElementSibling;
  panel.classList.toggle('hidden');
}

// Event listeners for population growth sliders
const arizonaPopulationSlider = document.getElementById('arizona-population-slider');
arizonaPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const californiaPopulationSlider = document.getElementById('california-population-slider');
californiaPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const coloradoPopulationSlider = document.getElementById('colorado-population-slider');
coloradoPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const newMexicoPopulationSlider = document.getElementById('new-mexico-population-slider');
newMexicoPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const nevadaPopulationSlider = document.getElementById('nevada-population-slider');
nevadaPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const utahPopulationSlider = document.getElementById('utah-population-slider');
utahPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const wyomingPopulationSlider = document.getElementById('wyoming-population-slider');
wyomingPopulationSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});

const populationGrowthSlider = document.getElementById('total-population-slider');
populationGrowthSlider.addEventListener('input', () => {
  updatePopulationGrowthRates();
  generateChartData();
  updateChart();
});




// Event listeners for other sliders
// Event listeners for other sliders

const snowpackSlider = document.getElementById('snowpack-slider');
snowpackSlider.addEventListener('input', () => {
  updateSnowpackLevel();
  updateChartData();
  updateChart();
});

const agricultureSlider = document.getElementById('agriculture-slider');
agricultureSlider.addEventListener('input', () => {
  updateAgricultureLevel();
  updateChartData();
  updateChart();
});

// Event listener for accordion button click
const accordionButton = document.getElementById('accordion-button');
accordionButton.addEventListener('click', handleAccordionButtonClick);

// Initialize chart data and population sliders
generateChartData();
updatePopulationSliders();

// Initialize chart
updateChart();

