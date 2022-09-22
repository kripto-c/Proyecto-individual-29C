import axios  from 'axios';

export function getBreeds() {
    return async function(dispatch){
          let json = await axios.get('/dogs');
          return dispatch({type:"GET_BREEDS", payload:json.data})
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        let json = await axios.get('/temperaments');
        return dispatch({
            type: "GET_TEMPERAMENTS",
            payload: json.data,
        });
    }  

  };
      export function filterBreeds(payload) {
         return{
              type:'FILTER_BY_TEMPERAMENTS', payload
         }
    }


export function filterCreated(payload) {
     return{
         type:"FILTER_CREATE", payload
     }
}

export function orderAlphabetical(payload) {
      return{
         type:"ORDER_ALPHABETICAL", payload
      }
}

export function orderWeigth(payload) {
     return{
         type:"ORDER_WEIGTH", payload
     }
}


export function getNameBreeds(payload) {
    return async function (dispatch) {
         try {
            let json  = await axios.get(`/dogs?name=${payload}`);
            return dispatch({
                 type: "GET_NAME_BREEDS", payload: json.data
            })
         } catch (error) {
            return dispatch({
                type: "ERROR_404", payload: error
            })
         }
    }
}


export function postBreeds(payload){
     return async function(){
            const data = await axios.post(`/dogs`, payload);
        return data;
    }
}


export function getDetail(id) {
     return async function(dispatch){
         try {
           let json = await axios.get(`/dogs/${id}`)
           return dispatch({
           type:"GET_DETAILS",
           payload:json.data
           })
         } catch (error) {
            return dispatch({
                type: "GET_DETAILS", payload :error
            })
         }
     }
}

export function clearErrors() {
      return {
        type:"CLEAR_ERRORS", payload:[]
      }
}

export function GetNumPag(num) {
      return{
         type:"GET_NUM_PAG", payload:num
      }
}

export function deletBreeds(id) {
     return async function() {
           const data = await axios.get(`/breedsDelete/${id}`)
          return data;
     }
}