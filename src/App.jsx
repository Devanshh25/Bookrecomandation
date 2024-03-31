import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from '../Components/Navbar/NavbarMain';
import SignIn from "../Components/Signin/SignIn";
import SignUp from "../Components/Signin/SignUp";
import Navbar2 from '../Components/Navbar2/Navbar2';
import Favorites from '../Components/Favorites/Favorites';
import Explore from '../Components/Navbar2/Explore';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NavbarMain />} >
                    <Route index path='signin' element={<SignIn />} />
                    <Route index path='signup' element={<SignUp />} />
                    <Route path='/' element={<Navbar2 />} >
                        <Route index path='favorite' element={<Favorites />} />
                    </Route>
                </Route>
                <Route index path='explore' element={<Explore />} >
                </Route>

            </Routes>

        </div>
    )
}

export default App;
