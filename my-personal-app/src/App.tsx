
import './App.css'
import AboutPage from './components/about'
import NewsFeed from './components/blog'
import BlogResourcesPage from './components/blog'
import CompaniesWeWorkWith from './components/companies'
import ErrorBoundary from './components/error'
import Footer from './components/footer'
import LandingSection from './components/landing'
import Navbar from './components/navbar'
import PreviousWorksSection from './components/previousWorks'
import ServicesSection from './components/service'
import ContactUs from './components/contactus'
import TestimonialsSection from './components/testimonial'
import Testimonials from './components/testimonial'
function App() {

  return (
    <>
     
      <Navbar/>
      <LandingSection/>
      <PreviousWorksSection/>

      <ServicesSection/>
            <AboutPage/>

            <CompaniesWeWorkWith/>

      <Testimonials/>
      {/* <ErrorBoundary>
            <NewsFeed />
        </ErrorBoundary> */}
        <ContactUs/>
      <Footer/>
     
    </>
  )
}

export default App
