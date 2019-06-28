import axios from 'axios'

const ProfessionApi = axios.create({
  baseURL: '/api/profession'
})

ProfessionApi.getAll = (callback) => {
  ProfessionApi.get()
  .then((res) => {
    callback && callback(res)
  })
  .catch(err => {
    console.log(err) // eslint-disable-line no-console
  })
}

ProfessionApi.create = (profession, callback) => {
  ProfessionApi.post('/api/profession', profession)
    .then(() => {
      callback && callback()
    })
    .catch(err => {
      console.log(err) // eslint-disable-line no-console
    })
}

ProfessionApi.save = (profession, callback) => {
  ProfessionApi.put(`/api/profession/${profession.id}`, profession)
    .then((res) => {
      callback && callback(res)
    })
    .catch(err => {
      console.log(err) // eslint-disable-line no-console
    })
}

ProfessionApi.delete = (profession, callback) => {
  ProfessionApi.delete(`/api/profession/${profession.id}`, profession)
    .then((res) => {
      callback && callback(res)
    })
    .catch(err => {
      console.log(err) // eslint-disable-line no-console
    })
}

export default ProfessionApi
