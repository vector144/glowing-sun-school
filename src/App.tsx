import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { AdmissionModal } from './components/common/AdmissionModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Play Group');

  const handleOpenEnquiry = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen selection:bg-amber-400 selection:text-amber-950">
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={() => handleOpenEnquiry()} />} />
            <Route path="/programs" element={<Programs onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />

        <AdmissionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultProgram={selectedProgram}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
