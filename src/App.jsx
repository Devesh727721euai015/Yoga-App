import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import CustomNavBar from './pages/CustomNavBar';
import HomePage from './pages/home';
import Bookings from './pages/booking';
import AboutPage from './pages/about';
import Profile from './pages/profile';
import Service from './pages/service';
import Bookingregistration from './pages/bookingregistration';
import AdminLoginForm from './pages/AdminLoginForm';
import Book1 from './pages/Book1';
import Ahome from './pages/Ahome';
import Booked1 from './pages/Booked1';
import Dashboard from './pages/Dashboard';
import Adminprofile from './pages/Adminprofile';


function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <LoginForm/>
    },
    {
      path:'/signup',
      element:<SignupForm/>
    },
    {
      path:'/home',
      element:<HomePage/>
    },
    {
      path:'/Book',
      element:<Bookings/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/Profile',
      element:<Profile/>
    },
    {
      path:'/Service',
      element:<Service/>
    },
    {
      path:'/Bookingregistration',
      element:<Bookingregistration/>
    },
    {
      path:'/AdminLoginForm',
      element:<AdminLoginForm/>
    },
    {
      path:'/Book1',
      element:<Book1/>
    },
    {
      path:'/Ahome',
      element:<Ahome/>
    },
    {
      path:'/Booked1',
      element:<Booked1/>
    },
    {
      path:'/Dashboard',
      element:<Dashboard/>
    },
    {
      path:'/Adminprofile',
      element:<Adminprofile/>
    }
    
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App