# Know A Movie

A sleek, responsive movie search application that allows users to search for movies and TV series by title, view detailed information, and get recommendations based on predefined keywords. Built with React, Axios, and the OMDB API, this project demonstrates the integration of multiple technologies to create an intuitive and functional movie search experience.

## Features

### **1. Recommendation System**
Although the OMDB API doesn't allow fetching multiple movie or series data without a title or ID, this app offers a **recommendation system** based on hardcoded keywords. These recommendations provide users with suggestions for movies and shows to explore.

### **2. Search by Title**
Users can search for movies and TV shows by entering the title. The application fetches results from the OMDB API and displays them with relevant details such as:
- Movie/TV Show Title
- Poster Image
- Year of Release
- Type (Movie/TV Show)
  
### **3. Full Movie/Series Information**
By clicking on any movie or show card, users are directed to a detailed page showing full information, including:
- Plot summary
- Cast & crew details
- Ratings (IMDb)
- Genre, Language, and more!

### **4. Advanced Search** (Feature Dropped)
Initially, there was a plan to implement an **Advanced Search** feature, allowing users to filter their results based on various criteria. Unfortunately, this feature was dropped due to limitations of the OMDB API, which does not support multiple filter queries without a title or ID.

### **5. Pagination & Lazy Loading**
- **Pagination**: The app implements page-wise loading, showing 10 results per page. Users can navigate between pages and view additional search results without reloading the entire page.
- **Lazy Loading**: Results are fetched dynamically, loading new pages as users navigate to them.

### **6. Responsive Design**
Built with **Tailwind CSS**, the app is fully responsive, ensuring a seamless experience on devices of all sizes. From desktops to mobile devices, the layout adjusts accordingly to fit various screen sizes.

## Skills and Technologies Used

### **1. React**
- Built with React for creating a dynamic, component-based UI.
- Utilized React hooks like `useState` and `useEffect` for state management and side effects.

### **2. Axios**
- Used Axios for fetching data from the OMDB API, enabling smooth asynchronous HTTP requests.

### **3. OMDB API**
- Integrated the OMDB API to fetch movie and TV series data, providing detailed information based on title search.

### **4. Tailwind CSS**
- Designed the app using **Tailwind CSS**, allowing for flexible and responsive styling with utility classes.
- Emphasized mobile-first design principles to ensure a smooth user experience across devices.

### **5. React Router**
- Used **React Router** to handle page navigation, including the transition from search results to detailed movie/TV show information.

### **6. Session Storage**
- Implemented **Session Storage** to persist clicked card details between page refreshes, enabling users to view detailed information even after navigating away.

### **7. Responsive Layout**
- Created a responsive layout using Tailwind CSS grid system and flex utilities for an optimal display on various screen sizes, from mobile phones to desktop monitors.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Aman-pandey-5909/KnowAMovie.git
   ```

2. Navigate into the project directory:
    ```
    cd client
    ```

3. Install the dependencies:
    ```
    npm install
    ```

4. Start the development server:
    ```
    npm start
    ```

Open the app in your browser: http://localhost:5173

### Demo
A live demo of the app is available at https://kawmovie.vercel.app/

### Conclusion
This project serves as a showcase of my ability to integrate APIs, build responsive user interfaces, and manage application state with React and modern frontend tools like Axios and Tailwind CSS. It highlights my skills in creating user-friendly web applications and working with third-party APIs to fetch and display data.
