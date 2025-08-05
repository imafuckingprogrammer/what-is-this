import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/ui/CustomCursor'
import InitialLoader from './components/InitialLoader'
import { useInitialLoader } from './hooks/useInitialLoader'
import usePerformanceOptimization from './hooks/usePerformanceOptimization'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  const { shouldShowLoader, handleLoadingComplete } = useInitialLoader()
  const { shouldRender } = usePerformanceOptimization()

  return (
    <>
      {shouldRender('cursor') && <CustomCursor />}
      <Layout>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </PageTransition>
      </Layout>

      {shouldShowLoader && <InitialLoader onComplete={handleLoadingComplete} />}
    </>
  )
}

export default App