import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import BlogSection from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BlogPage from './components/blog/BlogPage'
import BlogPost from './components/blog/BlogPost'
import ScrollToTop from './components/ui/ScrollToTop'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Le Minh Khoa - Portfolio</title>
        <meta name="description" content="Le Minh Khoa - Developer Intern Portfolio" />
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<><BlogPage /><Footer /></>} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  )
}
