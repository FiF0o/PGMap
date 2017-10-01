const myRedu = (state = {}, action) => {
  const { text, type } = action;
  
  switch (type) {
    case 'MY_CASE':
      return [
        ...state,
        {
          text
        }
      ]
    default:
      return state
  }
}

export default myRedu