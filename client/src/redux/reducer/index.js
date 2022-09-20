const initialState = {
    breeds:[],
    temperaments:[],
    allBreeds: [],    //copi de el breeds para que no se borre cuando se haga un filtrado// estado de soporte
    details:[],
    errors:[],
    numPag:[],
}


function rootReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_BREEDS":
         return{
            ...state, breeds:action.payload, allBreeds:action.payload
         }
         case "GET_TEMPERAMENTS":
            return{
                ...state,
                 temperaments:action.payload
            }
        case "FILTER_BY_TEMPERAMENTS":
          const allBreeds =  state.allBreeds;
          let filtered = []

         if (action.payload === "All") {
            filtered = allBreeds
         }else{
           const array = [];
           let found = allBreeds.map(e => {
            if (e.temperament) {
                if (e.temperament.includes(action.payload)) {
                     array.push(e)
                }
            }
           });
             array.map(e => filtered.push(e))
         }

          return{
             ...state,
               breeds: filtered
            }
        case "FILTER_CREATE":
            const allBreeds2  = state.allBreeds;
            const createdFilter = action.payload === 'Created' ? allBreeds2.filter(el=> el.createdInDb === true ) : allBreeds2.filter(el=> !el.createdInDb)
            return{
                ...state, breeds:action.payload === "All" ? state.allBreeds : createdFilter
            }

        case "ORDER_ALPHABETICAL":
            const sortedName = action.payload === 'A-Z' ?
            state.breeds.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1;
                }
                return 0
            }) :
            state.breeds.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        return {
            ...state,
            breeds: sortedName,
        }
        case "ORDER_WEIGTH":
            const sortedWeight = action.payload === 'Lowest' ?
                state.breeds.sort(function (a, b) {
                    return parseInt(a.weight.min) - parseInt(b.weight.min);
                }) :
                state.breeds.sort(function (a, b) {
                    return parseInt(a.weight.min) - parseInt(b.weight.min);
                }).reverse() 
            return {
                ...state,
                breeds: sortedWeight,
            }
        case "GET_NAME_BREEDS":
            return{
                ...state, breeds: action.payload, errors:""
            }
        case "ERROR_404":
                return{
                    ...state,
                    errors:action.payload    
                }
        case "CLEAR_ERRORS":
              return{
                ...state, errors:action.payload
              }        
        case "POST_BREEDS":
            return{
                ...state
            } 
        case "GET_DETAILS":
            return{
                ...state,
                details:action.payload
            }
        case "GET_NUM_PAG":
            return{
                ...state,
                numPag:action.payload
            }     
        default:
             return state; 
    }
}



export default rootReducer;