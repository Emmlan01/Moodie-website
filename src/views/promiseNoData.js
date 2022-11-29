export default function promiseNoData(promiseState){
    if(!promiseState.promise){ //returnerar ''no data'' ifall promise i promiseState är null.
        return <div>no data</div>;
    }  
    if (!promiseState.data && !promiseState.error){  //Ifall promise inte är löst än (dvs både error och datta i promise är falsy) så har vi en loading image.
        return <img  src={"https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"}  width = "300" height = "200"/>;
    }

    if(promiseState.error){
        return <div>dummy error to show</div>;
    }
               
    
}