import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setter) => {
    axiosWithAuth()
        .get("/colors")
        .then(res => {
            setter(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export default fetchColorService;