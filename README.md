README

Moodie - Dynamic movie recommendations based on the users local weather and time.

Q.  What is Moodie?

A.  Moodie is a web application that can dynamically recommend movies to watch based on the current time of day and weather at the users location.
    The movie recommendations are tailored to suit the mood that the weather and time create. For example: The app may suggest horror movies during
    a rainy night, or a comedy when the sun is shining.
    
Q.  What has currently been added?

A.  The app currently has back-end support for most of the main functionality intended to be provided, but they have not yet been fully implemented in the
    intended workflow. Weather, time and movie data may be fetched but the site does not currently provide proper dynamic recommendations, nor is the
    site layout complete.
    
Q.  What will be added in the future?

A.  Most of the intended features have back-end support implemented. Most of the work which remains pertains to dynamically recommending movies based
    on fetched data. The site will also receive a significant facelift with a dynamic background which changes to reflect the weather/time status at the    
    user's location. Site login and persistence will also be added.
    
***********************************************************************************************
FILE STRUCTURE:

## src:
  App.css - Site styling
  
  App.js - App root
  
  firebaseModel - Used for firebase test purposes
  
  index.css - Default css generated during project creation, not used.
  
  index.js - Root element of the entire project, call to create model.
  
  logo.svg - Default react logo, will be removed
  
  mainModel.js - Model used to keep track of some data needed for the site to function. The site uses the MVP design pattern, where this model is the M.
  
  movieModel.js - Old model, replaced by mainModel. Deprecated.
  
  movieSource.js - Contains some functions used to fetch data about movies.
  
  reportWebVitals.js - React default
  
  resolvePromise.js - Used to resolve promises. Also accepts notify functions which may be used to re-render the app, etc.
  
  setupTests.js - React default
  
  weatherModel.js - Old and replaced by mainModel. Deprecated.
  
  weatherSource.js - Contains some functions used to fetch data about time and weather.
  
  ## reactjs
  
  moviePresenter.js - Presenter that keeps track of state information pertaining to movies, functions to re-render the app, etc. Communication between model
                      and view according to the MVP design pattern.
  
  weatherPresenter.js - Presenter that keeps track of state information pertaining to time and weather. -''-

  ## views
  
  movieView.js - View which displays movie related content. Adheers to the MVP design pattern.
  
  weatherVies.js - View which displays weather related content. -''-
  
  promiseNoData.js - Used when there is nothing else to display, i.e. no data.
  
