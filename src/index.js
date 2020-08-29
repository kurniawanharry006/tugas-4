import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";



const apiUrl = "https://indonesia-covid-19.mathdro.id/api";

async function getData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const {jumlahKasus,sembuh,meninggal} = data
    document.getElementById("data-1").innerHTML = `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top"  src="data:image/jpeg;base64,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" alt="Card image cap">
        <div class="card-body">
        <h3>${jumlahKasus}</h3>
        <p>${new Date().toDateString()}</p>
        <p class="card-text">Jumlah kasus positif COVID-19</p>
     </div>
    </div>
    `
    document.getElementById("data-2").innerHTML = `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top"  src="https://thumbs.dreamstime.com/b/family-mother-father-baby-girl-wearing-medical-masks-coronavirus-covid-concept-self-isolation-quarantine-outbreak-178565656.jpg" alt="Card image cap">
        <div class="card-body">
        <h3>${sembuh}</h3>
        <p>${new Date().toDateString()}</p>
        <p class="card-text">Jumlah kasus sembuh COVID-19</p>
     </div>
    </div>
    `
    document.getElementById("data-3").innerHTML = `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top"  src="https://thumbs.dreamstime.com/b/covid-coronavirus-concept-bahraini-medical-staff-wearing-mask-protective-clothing-praying-against-virus-outbreak-176062240.jpg" alt="Card image cap">
        <div class="card-body">
        <h3>${meninggal}</h3>
        <p>${new Date().toDateString()}</p>
        <p class="card-text">Jumlah kasus meninggal COVID-19</p>
     </div>
    </div>
    `
  } catch (error) {
    console.log(error);
  }
}

async function getDataProvinsi(){
  try {
    const response = await fetch(`${apiUrl}/provinsi`);
    const data = await response.json();
    let dataProvinsi = ""
    data.data.forEach(function(item,idx) {
      dataProvinsi += '<tr>'
      dataProvinsi += `<td>${idx+1}</td>`
      dataProvinsi += `<td> ${item.provinsi}</td>`
      dataProvinsi += `<td>${item.kasusPosi}</td>`
      dataProvinsi += `<td>${item.kasusSemb}</td>`
      dataProvinsi += `<td>${item.kasusMeni}</td>`
      dataProvinsi += '</tr>'
  })

  document.getElementById("table-provinsi").innerHTML = dataProvinsi
    
  } catch (error) {
    
  }
}


getData();
getDataProvinsi()