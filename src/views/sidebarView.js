import { movieType } from "../utilities.js";

function SidebarView(props) {

    //function dishTableRowCB(movie) {
        function removeMovieACB(){
           console.log("funkar ej")
            props.deleteMovie()
        }

        function setCurrentACB(event){
            event.preventDefault();
            props.currentMovie()
          //  window.location.hash = "#details";      //Navigate to movie.
        }
    
    return ( <aside className="w-64" aria-label="Sidebar">
    <div className="overflow-y-auto py-3 px-1 bg-slate-200">
    <div className="grid place-items-center font-bold py-3 rounded text-white text-2xl">{props.movieData.original_title}
    <button x>

    </button>
       <ul className="space-y-2">
          <li>
             <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Saved movies</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
             </a>
          </li>
       </ul>
       </div>
    </div>
 </aside>)
         
}

export default SidebarView;