# Problem-Solving Documentation

## 1. Problem Definition & Hypothesis Formation

**Problem:**  
People moving to a new city often struggle to find a neighborhood that matches their lifestyle and priorities (such as safety, schools, nightlife, parks, affordability, and public transport). Existing solutions are either too generic or require a lot of manual research.

**Hypothesis:**  
If users can express their preferences for key lifestyle factors, an algorithm can match them to the most suitable neighborhoods using real data, making the search process faster and more personalized.


## 2. Research Methodology & Findings

- **User Research:**  
  I spoke with friends and family who have moved cities. Most said they spent hours searching for information on different neighborhoods, often using multiple websites and forums.
- **Existing Solutions:**  
  Websites like Niche and Numbeo provide data, but don’t offer personalized matching. Real estate sites focus on listings, not lifestyle fit.
- **Gap Identified:**  
  There is a need for a tool that quickly matches users to neighborhoods based on their unique preferences, not just property listings.



## 3. Algorithm Design Rationale & Trade-offs

- **Design:**  
  I chose a simple weighted scoring algorithm: for each neighborhood, multiply the user’s preference by the neighborhood’s score for each factor, then sum the results.
- **Trade-offs:**  
  - **Pros:** Easy to understand, fast to compute, and transparent for users.
  - **Cons:** Doesn’t account for complex interactions between factors or non-linear preferences.
- **Why this approach:**  
  Given the small dataset and the need for transparency, this method is effective and easy to explain.



## 4. Data Challenges & Solutions

- **Challenge:**  
  No open dataset with all required factors for local neighborhoods.
- **Solution:**  
  I created a sample dataset with 10 neighborhoods, assigning realistic scores for each factor based on online research and reasonable assumptions.
- **Edge Cases:**  
  The algorithm handles missing data by skipping undefined factors.



## 5. Testing Approach & Validation

- **Testing:**  
  I tested the app with various slider settings to ensure the results changed logically. I also asked others to try the app and give feedback.
- **Validation:**  
  The app always returns all neighborhoods, ranked by best match, and handles edge cases (such as all sliders set to minimum or maximum).



## 6. Critical Evaluation & Limitations

- **Effectiveness:**  
  The app successfully matches user preferences to neighborhoods and provides a clear, ranked list.
- **Limitations:**  
  - The dataset is small and not from a real source.
  - The algorithm is simple and may not capture all user needs.
  - No integration with external APIs or real-time data.
- **Root Causes:**  
  Limited time, zero budget, and lack of open data sources.



## 7. Future Improvements

- Integrate real-world data from open APIs or government sources.
- Allow users to save preferences and compare neighborhoods.
- Add more factors (like healthcare, shopping, etc.).
- Deploy the app online for public use.
- Explore more advanced matching algorithms.



## 8. Systematic Approach & Scalability

- The app is modular: data, backend, and frontend are separated.
- The algorithm and data structures can be easily expanded for more neighborhoods or factors.
- The code is documented and easy to maintain.
