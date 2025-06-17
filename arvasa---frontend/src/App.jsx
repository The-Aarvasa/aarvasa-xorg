import './App.css';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import Services from './pages/Services';
import Ai from './pages/Ai';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Listing } from './pages/Listing';
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
import ConversationPage from './components/Chatbot/ConversationPage'
import Subscription from './pages/Subscription';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import MainProfile from './components/profile/MainProfile';
import Guides from './components/profile/Guides';
import Transactions from './pages/Transactions';
import FilterPage from './components/Chatbot/FilterPage';
function AppLayout() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/otp';

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent" element={<Agents />} />
          <Route path="/agent/:id" element={<AgentDetails />} />
          <Route path="/services" element={<Services />} />


          <Route path="/listings" element={<Listing />}>
            <Route index element={<Property />} />
            <Route path="ratestrends" element={
              <>
                <ShowTrends />
                <Graphs />
              </>
            } />

            <Route path="propertydetails/:id" element={<PropertyBrief />} />
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/news" element={<News />} />

          <Route path="/profile" element={<Profile />}>
            <Route index element={<MainProfile />} />
            <Route path="guides" element={
                <Guides />
            } />

             <Route path="transaction" element={
                <Transactions />
            } />

            <Route path="propertydetails/:id" element={<PropertyBrief />} />
          </Route>

            <Route path="/otp" element={<Otp />} />
            <Route path="/chat" element={<FilterPage />} />
            <Route path="/chating" element={<ConversationPage />} />
            <Route path="/AddListing" element={<AddListings />} />
            <Route path="/subscription" element={<Subscription />} />

        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
