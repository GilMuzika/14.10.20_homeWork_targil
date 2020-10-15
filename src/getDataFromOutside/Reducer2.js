const INITIAL_STATE = [];
const warehouse = [];

//      let idsArrMax = Math.max.apply(Math, this.state.idsArr);
function Reducer2(state = INITIAL_STATE, action) {
    switch(action.type) {
      default : {

            const var_name = action.argument_var_name;
            let NEW_STATE = [];
            if(Math.max.apply(Math, warehouse) < action[var_name]) {
                warehouse.push(action[var_name]);
                console.log(warehouse)
             NEW_STATE = [...INITIAL_STATE, action[var_name]];
            }
            else {
                NEW_STATE = [...INITIAL_STATE, Math.max.apply(Math, warehouse)];
            }
            //alert(`In Reducer:\n ${  JSON.stringify(action)   },\n-------------\n, ${    JSON.stringify(state)    }`);
          
          
          return NEW_STATE;
        }
    }
  }
   


  
  export default Reducer2;