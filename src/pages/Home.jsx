import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Main from '../components/Main.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
            <Main />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home