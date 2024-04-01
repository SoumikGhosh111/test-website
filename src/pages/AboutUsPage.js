import React from 'react'; 
import AboutUsHeroSection from '../aboutus-page-components/AboutUsHeroSewction/AboutUsHeroSection';
import AboutSection from '../aboutus-page-components/AboutSection/AboutSection';
import StatsSection from '../aboutus-page-components/StatsSection/StatsSection';
import Quotation from '../aboutus-page-components/Quotation/Quotation';
import OurTeam from '../aboutus-page-components/OurTeam/OurTeam';
import TeamMembers from '../aboutus-page-components/TeamMembers/TeamMembers';
import ClientsReview from '../common-components/ClientsReview/ClientsReview';

function AboutUsPage() {
  return (
    <>
      <AboutUsHeroSection />
      <AboutSection />
      <StatsSection />
      <Quotation />
      <OurTeam />
      <TeamMembers />
      <ClientsReview />
    </>
  )
}

export default AboutUsPage