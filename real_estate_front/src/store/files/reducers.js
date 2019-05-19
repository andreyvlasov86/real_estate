


const initialState = {
  collectData: {
    loading: localStorage.getItem('dataLoading') ? localStorage.getItem('dataLoading') : false,
    error: false,
    status: null,
    data: {},
    id: localStorage.getItem('dataLoadingId') ? localStorage.getItem('dataLoadingId') : null,
  },
  deleteData: {
    loading: false,
    error: false,
    status: null
  }

};

const filesData = (state = initialState, action) => {
  switch (action.type) {
      case 'COLLECT_DATA':
      localStorage.setItem('dataLoading', true)
      return {
        ...initialState,
        collectData: {
          ...state.collectData,
          loading: true
        }

      };

    case 'COLLECT_DATA_PING':
      console.log('COLLECT_DATA_PING', action.payload)
      localStorage.setItem('dataLoading', true)
      return {
        ...initialState,
        collectData: {
          ...state.collectData,
          loading: true,
        }

      };

    case 'COLLECT_DATA_SUCCEEDED':
      localStorage.setItem('dataLoading', action.payload.loading)
      localStorage.setItem('dataLoadingId', action.payload.id ? action.payload.id : state.collectData.id)
      return {
        ...state,
        collectData: {
            ...state.collectData,
            loading: action.payload.loading,
            error: false,
            status: true,
            id: action.payload.id ? action.payload.id : state.collectData.id,
            data: action && action.payload && action.payload.data ? action.payload.data : {}
        }
      };

    case 'COLLECT_DATA_FAILED':
      localStorage.setItem('dataLoading', false)
      return {
        ...state,
        collectData: {
            ...state.collectData,
            loading: false,
            error: true,
            status: false
        }
      };

      case 'DELETE_DATA':
      return {
          ...initialState,
          deleteData: {
              ...state.deleteData,
              loading: true,
          }
      }

      case 'DELETE_DATA_SUCCESS':
      return {
         ...state,
         deleteData: {
             ...state.deleteData,
             loading: false,
             status: true,
             error: false
         }
      }

    default:
      return state;
  }
};

export default filesData