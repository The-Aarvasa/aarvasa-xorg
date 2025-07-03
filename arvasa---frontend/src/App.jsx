import './App.css';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import Services from './pages/Services';
import Ai from './pages/Ai';
import About from './pages/About';
import Navbar from './components/Navbar';
import Listing from './pages/Listing';
import Property from './components/listing/Property';
import Graphs from './components/listing/Graphs';
import SignIn from './components/Auth/SignIn';
import Test from './components/Test';
import News from './pages/News';
import { ShowTrends } from './components/listing/ShowTrends';
import Profile from './pages/Profile';
import PropertyBrief from './components/listing/PropertyBrief';
import Otp from './components/Auth/Otp';
import AgentDetails from './pages/AgentDetails';
import AddListings from './pages/AddListings';
import { Agents } from './pages/Agents';
import ConversationPage from './components/Chatbot/ConversationPage';
import Subscription from './pages/Subscription';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import MainProfile from './components/profile/MainProfile';
import Guides from './components/profile/Guides';
import Transactions from './pages/Transactions';
import FilterPage from './components/Chatbot/FilterPage';
import Tools from './pages/Tools';
import Budget from './components/tools/Budget';
import Emi from './components/tools/Emi';
import Loan from './components/tools/Loan';
import Area from './components/tools/Area';
import InsideArticle from './components/News/InsideArticle';
import LandingPageofAi from './components/Chatbot/LandingPageOfAi';
import ContactedAgents from "./components/profile/ContactedAgents";
import ApplicationStatus from './components/profile/ApplicationStatus';
import PropertyDetails from './pages/PropertyDetails';
import Favourites from "./components/profile/Favourites";
import BackToTopButton from './components/Home/BackToTopButton';
import { Error } from './pages/Error';
import ForgotPassword from './components/Auth/ForgotPassword';
import PropertyMain from './components/listing/PropertyMain';
import Loaders from './components/Loaders';
import UnlockPremium from "./components/Subscription/UnlockPremium";
import { FilterProvider } from './context/FilterProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AiButton from './components/Home/AiButton';
import PrivateRoute from './utils/privateRoute';
import { AuthProvider } from './context/AuthContext'; // ✅ Importing AuthProvider

import { useState } from 'react';

function AppLayout() {
  const [popup, setPop] = useState(false);
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === '/otp' ||
    location.pathname === '/signin' ||
    location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {!hideNavAndFooter && <Navbar />}

        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/services" element={<Services />} />

            <Route path="/listings" element={<Listing />}>
              <Route index element={<PropertyMain />} />
              <Route path="ratestrends" element={
                <>
                  <ShowTrends />
                  <Graphs />
                </>
              } />
            </Route>

            <Route path="/listings/propertydetails/:id" element={<PropertyDetails />} />
            <Route path="/news" element={<News />} />

            <Route path="/profile" element={<Profile />}>
              <Route index element={<MainProfile />} />
              <Route path="guides" element={<Guides />} />
              <Route path="activity" element={<ApplicationStatus />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="transaction" element={<Transactions />} />
              <Route path="Contactagents" element={<ContactedAgents />} />
            </Route>

            <Route path="/chat" element={<Ai />} />
            <Route path="/AddListing" element={<AddListings />} />
            <Route path="/subscription" element={<Subscription />} />

            <Route path="/tools" element={<Tools />}>
              <Route path="budgetcalculator" element={<Budget />} />
              <Route path="EMIcalculator" element={<Emi />} />
              <Route path="homeloaneligibility" element={<Loan />} />
              <Route path="areaconverter" element={<Area />} />
            </Route>

            <Route path="/article" element={<InsideArticle />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      {location.pathname !== "/chat" && <AiButton />}
      <BackToTopButton />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider> {/* ✅ Wrap everything in AuthProvider */}
        <FilterProvider>
          <AppLayout />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastClassName="z-[99999] !fixed rounded-md shadow-lg"
          />
        </FilterProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
