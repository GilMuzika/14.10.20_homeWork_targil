import { ONE_POST } from './actionTypes';

const createAction = (post) => {
    const actionType = ONE_POST;
    let argument_var_name = Object.keys(post)[0];
    let argument_value = post[argument_var_name];

    //creating action object without a payload
    let action_obj =  {type: actionType};
    //adding a payload to the action object with dynamically calculated property name
    action_obj[argument_var_name] = argument_value;
    action_obj['argument_var_name'] = argument_var_name;

     return  action_obj;
}

export { createAction };