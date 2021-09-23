import './App.css';
import VenueSection from './components/VenueSection';
import FriendsSection from './containers/FriendsSection';
import IntroductionSection from './containers/IntroductionSection';
import InvitationSection from './containers/InvitationSection';
import MainSection from './containers/MainSection';
import ParentsSection from './containers/ParentsSection';
import RsvpSection from './containers/RsvpSection';

function App() {
  return (
    <div className='App'>
      <MainSection />
      <InvitationSection />
      <IntroductionSection />
      <ParentsSection />
      <FriendsSection />
      <VenueSection />
      <RsvpSection />
    </div>
  );
}

export default App;
