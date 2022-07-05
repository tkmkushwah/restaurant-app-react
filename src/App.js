import React from 'react' //its not compulsory 
import Restaurant from './components/basic/Restaurant';
const App = () => {
  return (
    <div>
    <Restaurant />
    </div>
    
  );
};


//how react actualy looking into it
// const App =()=>{
// return React.createElement(
//   "h1",
//   {},
//   "hello world"
//   );
// };
export default App