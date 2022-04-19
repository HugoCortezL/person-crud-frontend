import axiosInstance from './APIUtils'

const api = axiosInstance()

export const getAllPersons = (async (searchText, orderBy, order) => {
    return api
            .get(`/person?nameAndEmail=${searchText}&orderBy=${orderBy}&order=${order}`)
            .then(res => res.data)
            .catch(err => console.log(err))
})

export const getPersonById = ( async (id) => {
    return api
            .get(`/person/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err))
})

export const createPerson = ( async (person) => {
    return api
            .post("/person", person)
})

export const updatePerson = ( async (id, person) => {
    return api
            .put(`/person/${id}`, person)
})

export const deletePerson = ((id) => {
    api
        .delete(`/person/${id}`)
})