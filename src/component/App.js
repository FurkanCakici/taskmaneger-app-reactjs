import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';
import TaskForm from './TaskForm';
import Header from './Header';
const App = () => {
   return (
      <div className="App">
         <TaskListContextProvider>
            <div className="container">
               <div className="app-wrapper">
                  <Header />
                  <div className="main">
                     <TaskForm />
                     <TaskList />
                  </div>
               </div>
            </div>
         </TaskListContextProvider>
      </div>
   );
};

export default App;
