


export const collectData = () => {
  return { type: 'COLLECT_DATA' }
};

export const collectDataSuccess = (payload) => {
  return { type: 'COLLECT_DATA_SUCCEEDED', payload }
};

export const collectDataError = () => {
  return { type: 'COLLECT_DATA_FAILED' }
};

export const deleteData = () => {
  return { type: 'DELETE_DATA' }
};

export const deleteDataSuccess = () => {
  return { type: 'DELETE_DATA_SUCCESS' }
};

export const collectDataPing = (payload) => {
  return { type: 'COLLECT_DATA_PING', payload }
};

