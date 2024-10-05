import { Route, Routes } from "react-router-dom";
import {
  careersUrl,
  contactusUrl,
  csrinitiativesUrl,
  galleryUrl,
  healthcareUrl, homeUrl,
  hospitalityUrl,
  informationTechnologyUrl, infrastructureUrl, investmentUrl,
  newsCenterDetailsUrl,
  newsCenterUrl,
  ourCompanyUrl,
  privacyyUrl,
  renewableEnergyUrl, sportsUrl,
  teamManagementUrl,
  termsUrl,
} from "./components/helpers/constant-words";
import OurCompany from "./pages/our-company/OurCompany";
import ManagementTeam from "./pages/management-team/ManagementTeam";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/Home/Home";
import Sports from "./pages/sports/Sports";
import Investment from "./pages/investment/Investment";
import ContactUs from "./pages/contact-us/ContactUs";
import Careers from "./pages/careers/Careers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CSRInitiatives from "./pages/csr-initiatives/CSRInitiatives";
import NewsCenter from "./pages/news-center/NewsCenter";
import NewsCenterExplore from "./pages/news-center-explore/NewsCenterExplore";
import Hospitality from "./pages/Hospitality/Hospitality";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/TermsAndConditions/PrivacyPolicy";
import HealthCare from './pages/HealthCare/HealthCare';
import RenewableEnergy from './pages/RenewableEnergy/RenewableEnergy';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import InformationTechnology from './pages/InformationTechnology/InformationTechnology';


const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ourCompanyUrl} element={<OurCompany />} />
        <Route path={homeUrl} element={<Home />} />
        <Route path={teamManagementUrl} element={<ManagementTeam />} />
        <Route path={galleryUrl} element={<Gallery />} />
        <Route path={sportsUrl} element={<Sports />} />
        <Route path={investmentUrl} element={<Investment />} />
        <Route path={contactusUrl} element={<ContactUs />} />
        <Route path={careersUrl} element={<Careers />} />
        <Route path={csrinitiativesUrl} element={<CSRInitiatives />} />
        <Route path={newsCenterUrl} element={<NewsCenter />} />
        <Route path={newsCenterDetailsUrl} element={<NewsCenterExplore />} />
        <Route path={hospitalityUrl} element={<Hospitality />} />
        <Route path={termsUrl} element={<TermsAndConditions />} />
        <Route path={privacyyUrl} element={<PrivacyPolicy />} />
        <Route path={healthcareUrl} element={<HealthCare />} />
        <Route path={renewableEnergyUrl} element={<RenewableEnergy />} />
        <Route path={infrastructureUrl} element={<Infrastructure />} />
        <Route path={informationTechnologyUrl} element={<InformationTechnology />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Routing;
