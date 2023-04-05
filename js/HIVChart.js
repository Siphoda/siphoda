class HIVChart extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = `
      <style>
        .bg-gray-100 {
        }
        .container {
          max-width: 1140px;
        }
        .flex {
          display: flex;
        }
        .justify-around {
          justify-content: space-around;
        }
        .w-64 {
          width: 16rem;
        }
      </style>

      <div class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
          <div class="flex justify-around">
            <div class="w-64">
              <canvas id="menWomenChart"></canvas>
            </div>
            <div class="w-64">
              <canvas id="childrenAdultsChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;

    var menWomenData = {
      labels: ["Men", "Women"],
      datasets: [
        {
          label: "Percentage of HIV",
          data: [30, 70],
          backgroundColor: ["#4B5563", "#718096"],
        },
      ],
    };

    var childrenAdultsData = {
      labels: ["Adults", "Children"],
      datasets: [
        {
          label: "Percentage of HIV",
          data: [85, 15],
          backgroundColor: ["#CBD5E0", "#A0AEC0"],
        },
      ],
    };

    var options = {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70,
      legend: {
        position: "bottom",
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
            return dataset.label + ': ' + percentage + '%';
          }
        }
      }
    };

    var menWomenCtx = shadowRoot.querySelector("#menWomenChart").getContext("2d");
    var menWomenChart = new Chart(menWomenCtx, {
      type: "doughnut",
      data: menWomenData,
      options: options,
    });

    var childrenAdultsCtx = shadowRoot.querySelector("#childrenAdultsChart").getContext("2d");
    var childrenAdultsChart = new Chart(childrenAdultsCtx, {
      type: "doughnut",
      data: childrenAdultsData,
      options: options,
    });
  }
}

customElements.define("hiv-chart", HIVChart);