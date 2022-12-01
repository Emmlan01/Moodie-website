export default function promiseNoData(promiseState){
    
    // If there is no promise in the promiseState, then there is consequentially no data. Displaying a spinner makes no sense since no data will arrive either,
    // therefore we only show "no data".
    if(!promiseState.promise) return(<div>no data</div>);

    // If there is an active promise in the promiseState but we have not yet received any data (or error), we display some spinner image.
    if(!promiseState.data && !promiseState.error) {
        return(<img src="../content/bush_spinner.png" alt="Confused_Dubya.PNG"></img>);
    }

    // If there is an error, log it in the console.
    if(promiseState.error){
        console.log(promiseState.error.error);
        return(<div>{promiseState.error.error}</div>);
    }
}