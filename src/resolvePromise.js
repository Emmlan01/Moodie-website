
export default function resolvePromise(promise, promiseState, notify) {
	if (!promise) { //Kollar ifall promise är null då vi ej vill executa ett promise som är null.
		return;
	}
	promiseState.promise = promise;
	promiseState.data = null;			//UI update, user fortsätter ej att se resultat från tidigare sökningar
	promiseState.error = null;
	if (notify){
		notify();
	}

	function saveDataACB(result) {	// triggers UI update because of changing state 
		if (promiseState.promise !== promise){return;}
		
		promiseState.data = result;
		if (notify){
			notify();
		}
	}
	function saveErrorACB(err) { // triggers UI update because of changing state (föreläsningsslide 98)
		if (promiseState.promise !== promise){return;}
		promiseState.error = err;
		if (notify){
			notify();
		}
	}
	promise.then(saveDataACB).catch(saveErrorACB);
}

