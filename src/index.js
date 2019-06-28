import './index.css'
import ProfessionApi from './api/profession-api'

function populateProfessions(res) {
  let profsBody = "";

  res.data.map(p => {
    /*
    `<tr>
      <td><a href="#" data-id=${p.id} class="deleteProf">Delete</a></td>
      <td>${p.name}</td>
      <td>${p.description}</td>
      <td>${p.html}</td>
    </tr>`
    */
    profsBody +=
    `<tr>
      <td>${p.name}</td>
    </tr>`
  })

  global.document.getElementById('professions').innerHTML = profsBody
}

ProfessionApi.getAll(populateProfessions)
