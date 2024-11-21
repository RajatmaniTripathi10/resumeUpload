const initialState = {
    degree: "",
    university: "",
    specification: "",
    company: [],
    industry: [],
    booleanSearch: "",
  };
  
  const requirementsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FORM_DATA":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default requirementsReducer;
  