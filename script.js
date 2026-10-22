Papa.parse('gpascores.csv', { 
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');

    results.data.forEach(row => {

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${parseFloat(row.GPA_Baseline).toFixed(2)}</td>
        <td>${parseFloat(row.GPA_Post_AI).toFixed(2)}</td>
      `;

      tbody.appendChild(tr);
    });
  },

  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});
