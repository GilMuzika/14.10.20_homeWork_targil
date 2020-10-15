const INITIAL_STATE = [];

function Reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      default : {

            const var_name = action.argument_var_name;
             const NEW_STATE = [...INITIAL_STATE, action[var_name]];
            //alert(`In Reducer:\n ${  JSON.stringify(action)   },\n-------------\n, ${    JSON.stringify(state)    }`);
          
          
          return NEW_STATE;
        }
    }
  }
   
  export default Reducer;