import React from 'react';
import ProductList from './components/ProductList';
import './App.css'
import CustomItemContext from './context/ItemContext'; 
import Header from './components/Header';
function MyComponent() {
  //...rest of your component's code
}
const App = () => {
	return (
		<CustomItemContext>
			<Header />
			<ProductList />
		</CustomItemContext>
	);
};
// client/src/App is
// Your Fetch API code here
fetch("https://localhost:5001/api/something")
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}');
    } // Added closing parenthesis here
    return response.json();
  })
  .then(data => {
    console.log('GET Response:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export default App;