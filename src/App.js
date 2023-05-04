import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootNavigation from './navigation/index';


const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RootNavigation />
      </BrowserRouter>
    </>
  );
};

export default App;
