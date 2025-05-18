import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RouteLayout from './layout/routeLayout';
import HomePage from './pages/Home';
import About from './pages/About';
import UttrakhandPage from '../src/pages/uttrakhandPage.jsx'
import HimachalPradeshPage from '../src/pages/himachalPage.jsx';
import RajasthanPage from '../src/pages/rajasthanPage.jsx'; 
import GoaPage from '../src/pages/goaPage.jsx';
import KashmirPage from '../src/pages/kashmir.jsx';
import LehPage from '../src/pages/Leh.jsx';  
import BlogPage from '../src/pages/Blog.jsx'
import DetailsPage from "../src/pages/viewDetails.jsx"

function App() {
  const { state, title } = useParams();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouteLayout />}>
        <Route index element={<HomePage />} />
        <Route path='About' element={<About />} />
        <Route path='ourTour' element={<HomePage />} />
        <Route path='service' element={<HomePage />} />
        
      
        <Route path='tour/Uttarakhand' element={<UttrakhandPage />} />  
        <Route path='tour/Himachal-Pradesh' element={<HimachalPradeshPage />} />
        <Route path='tour/Rajasthan' element={<RajasthanPage />} />  
        <Route path='tour/Goa' element={<GoaPage />} />  
        <Route path='tour/Kashmir' element={<KashmirPage />} />  
        <Route path='tour/Leh&Ladakh' element={<LehPage />} /> 
        <Route path='tour/:state/details/:title' element={<DetailsPage/>} /> 
        <Route path='Blog' element={<BlogPage />} />
        
       
       
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
