import { Route, Routes } from 'react-router-dom'
import Detiles from './components/detiles/detiles'
import Navlink from './components/navlink/navlink'
import Notfound from './components/notfound/notfound'
import { useState } from 'react'
import { Languageprovider } from './context/language'
import Favourite from './components/favourite/favourite'
import Movies from './components/movies/movies'
import About from './components/about/about'
import AddUserFormik from './components/addUserForm/addUserFormik'
import RegsUserFormik from './components/addUserForm/regesUser'

function App() {
  const [languag, setlanguage] = useState("en");

  return (
    <div style={{ margin: 30 }}>

      <Languageprovider value={{ languag, setlanguage }}>

        <Navlink />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/regester' element={<RegsUserFormik />} />
          <Route path='/login' element={<AddUserFormik />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/:id' element={<Detiles />} />
          <Route path='/movie/' element={<Favourite />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

      </Languageprovider>

    </div>
  );
}

export default App;
