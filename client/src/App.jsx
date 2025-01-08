import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import client from './apollo/client';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import AvatarCreation from './pages/AvatarCreation';

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/avatar-creation" element={<AvatarCreation />} />
            </Routes>
        </Router>
    </ApolloProvider>
);

export default App;
