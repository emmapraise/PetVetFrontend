import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

function APIContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(null);

  // Fetch data
  useEffect(() => {
	fetch("https://fakestoreapi.com/products")
	.then((res) => res.json())
	.then(
	  (result) => {
		setIsLoading(true);
		setData(result);
		// console.log(data && data)
	  },

	  // Note: it's important to handle errors here
	  // instead of a catch() block so that we don't swallow
	  // exceptions from actual bugs in components.
	  (error) => {
		setIsLoading(true);
		setError(error);
	  }
	);
	// eslint-disable-next-line
}, []);

  return (
    <APIContext.Provider value={{ data, isLoading }}>
      {children}
    </APIContext.Provider>
  );
}

export default APIContextProvider;

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}