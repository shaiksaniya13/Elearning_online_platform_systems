import React from 'react';
import Header from './components/Header';
import Notification from './components/Notification';
import Search from './components/Search';
import CourseList from './components/CourseList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Notification />
      <Search />
      <CourseList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
