export const addFeature = item => {
    return {
      type: 'UPDATE_FEATURE',
      payload: item,
    };
  };

  export const removeFeature = item => {
    return {
      type: 'REMOVE_FEATURE',
      payload: item,
    };
  };