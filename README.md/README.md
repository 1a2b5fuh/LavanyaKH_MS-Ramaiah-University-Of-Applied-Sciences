# NeighborFit

Welcome to NeighborFit!  
This project helps you find the best neighborhood for your lifestyle, based on what matters most to you—like safety, schools, nightlife, parks, affordability, and public transport.


## What is NeighborFit?

Moving to a new city or choosing a place to live can be tough. Everyone has different priorities. NeighborFit is a simple tool that matches your personal preferences with real neighborhood data, so you can make a smarter, more confident choice.


## How Does It Work?

1. **Set Your Preferences:**  
   Use the sliders to tell us what’s important to you (for example, if you care more about safety or nightlife).

2. **Get Your Matches:**  
   Click "Find My Neighborhood" and see a ranked list of neighborhoods that best fit your needs.

3. **How Matching Works:**  
   The app multiplies your preference for each factor by each neighborhood’s score, adds them up, and sorts the results from best to worst.

## How To Run NeighborFit

**1. Start the Backend:**
- Open a terminal and run:
  ```bash
  cd "c:\Users\hp\LavanyaKH _M S Ramaiah University of Applied Sciences\backend"
  npm install
  node index.js
  ```
- The backend will run at [http://localhost:5000](http://localhost:5000).

**2. Start the Frontend:**
- Open a new terminal and run:
  ```bash
  cd "c:\Users\hp\LavanyaKH _M S Ramaiah University of Applied Sciences\frontend"
  npm install
  npm start
  ```
- The app will open in your browser at [http://localhost:3000](http://localhost:3000).

## About the Data

- The data lives in `Data/neighborhoods.json`.
- Each neighborhood has scores for safety, schools, nightlife, parks, affordability, and public transport.
- You can add more neighborhoods or change the scores if you want!



## What’s Special About This App?

- **Easy to use:** Just move the sliders and click a button.
- **Customizable:** You can edit the data or add new factors.
- **Modern look:** Clean, classic, and responsive design.



## Limitations & Ideas for the Future

- The dataset is small and made-up for demo purposes.
- The matching is simple—could be improved with more advanced logic.
- No login or saving your choices (yet).
- Could be put online for everyone to use!


## Made By

Lavanya K H  
M S Ramaiah University of Applied Sciences


