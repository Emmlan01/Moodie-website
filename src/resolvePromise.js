export default function resolvePromise(promise, promiseState, notify){
	promiseState.promise= promise;
    promiseState.data= null;         
    promiseState.error= null;

    //console.log("promise initiated");
    //console.log(promise);
    //console.log(promiseState);

    if(promise === null) {
        return("the promise is null!")
    }

    if(notify){
        notify();
    }

    function saveDataACB(result){ 
	    if(promiseState.promise !== promise) return;
            
            promiseState.data = result
            
            //console.log("data was saved")
            //console.log(promiseState.data)
            /* TODO save result in promiseState, as before */
    
            if(notify){
                notify();
            }

        } 

    function saveErrorACB(err)  { 
        if(promiseState.promise !== promise) return;
            promiseState.error = err
            /* TODO same check as above */
            /* TODO save err in promiseState, as before */
            
            if(notify){
                notify();
            }
    }
    promise.then(saveDataACB).catch(saveErrorACB);
}

//{resolvePromise};
