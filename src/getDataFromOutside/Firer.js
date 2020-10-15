    import axios from 'axios';




        const Fire = (url, stopFactor) => {
            //alert(`In Firer: \n${url}, ${stopFactor}`);
            return new Promise((resolve, reject) => {
                axios.get(url)
                .then(res=>  {
                    
                    if(Array.isArray(res.data)) {
                        console.log('in Firer');
                        console.log(res);
                        if(stopFactor)
                           resolve(res.data.slice(0,stopFactor));
                        else 
                        resolve(res.data);
                    }
                    else {
                        const rezult = [];
                        //const only_one_object = 'only_one_object';
                        rezult.push(res.data);
                        resolve(rezult);
                    }
                })
                .catch(err => {
                    reject(err);
                    //alert(`caught in  Firer: \n${JSON.stringify(err)}`);
                });
            });
    }

    export default Fire;



