import { useState } from 'react'
import { Phone, Mail, MapPin, Menu, X, Snowflake, Home, Wind, Hammer, DoorOpen, Warehouse } from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const services = [
    {
      icon: Snowflake,
      title: 'Varmepumper',
      description: 'Profesjonell installasjon og vedlikehold av varmepumper for optimalisert energibruk'
    },
    {
      icon: Home,
      title: 'Etterisolering',
      description: 'Effektiv etterisolering av boliger for reduserte energikostnader'
    },
    {
      icon: Wind,
      title: 'Vindtetting',
      description: 'Profesjonell vindtetting som holder varmen inne og kulden ute'
    },
    {
      icon: Hammer,
      title: 'Kledning',
      description: 'Montering av kvalitetskledning som beskytter og forskjønner boligen din'
    },
    {
      icon: DoorOpen,
      title: 'Vinduer og Dører',
      description: 'Installasjon av energieffektive vinduer og dører'
    },
    {
      icon: Warehouse,
      title: 'Garasjeporter og Terrasser',
      description: 'Montering av garasjeporter og bygging av terrasser'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Forespørsel fra ${formData.name}`
    const body = `Navn: ${formData.name}%0D%0AEpost: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0AMelding:%0D%0A${formData.message}`
    window.location.href = `mailto:kenneth@hoie-service.no?subject=${subject}&body=${body}`
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0E27]/95 backdrop-blur-sm border-b border-[#00D9FF]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/hoie-logo.png" alt="Høie Service AS" className="h-20 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hjem')} className="text-white hover:text-[#00D9FF] transition-colors">Hjem</button>
              <button onClick={() => scrollToSection('tjenester')} className="text-white hover:text-[#00D9FF] transition-colors">Tjenester</button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-[#00D9FF] transition-colors">Om Oss</button>
              <button onClick={() => scrollToSection('kontakt')} className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all">
                Kontakt Oss
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0E27] border-t border-[#00D9FF]/20">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('hjem')} className="block w-full text-left text-white hover:text-[#00D9FF] py-2">Hjem</button>
              <button onClick={() => scrollToSection('tjenester')} className="block w-full text-left text-white hover:text-[#00D9FF] py-2">Tjenester</button>
              <button onClick={() => scrollToSection('om-oss')} className="block w-full text-left text-white hover:text-[#00D9FF] py-2">Om Oss</button>
              <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-6 py-2 rounded-full">
                Kontakt Oss
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Energioppgradering av <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Din Bolig</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Profesjonelle tjenester innen varmepumper, isolering, vindtetting, kledning, vinduer, dører og mer
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all transform hover:scale-105"
          >
            Be om Gratis Befaring
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Våre <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Tjenester</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Vi tilbyr profesjonelle løsninger for energioppgradering
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-8 rounded-2xl border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all hover:shadow-xl hover:shadow-[#00D9FF]/20 group"
                >
                  <div className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Om <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Høie Service AS</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Vi er et profesjonelt håndverkerfirma som spesialiserer oss på energioppgradering av boliger. Med lang erfaring og høy kompetanse leverer vi kvalitetsarbeid som reduserer energikostnader og øker verdien på boligen din.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fra varmepumper til kledning, fra vindtetting til nye vinduer - vi tar oss av hele prosessen med profesjonalitet og presisjon.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-8 rounded-2xl border border-[#00D9FF]/20">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktinformasjon</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Telefon</p>
                    <a href="tel:48118300" className="text-white text-lg hover:text-[#00D9FF] transition-colors">481 18 300</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">E-post</p>
                    <a href="mailto:kenneth@hoie-service.no" className="text-white text-lg hover:text-[#00D9FF] transition-colors">kenneth@hoie-service.no</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Adresse</p>
                    <p className="text-white text-lg">Flatåsen 2, 5550 Sveio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Kontakt Oss</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Be om gratis og uforpliktet befaring av din bolig
          </p>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-8 rounded-2xl border border-[#00D9FF]/20 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">Navn *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0A0E27] border border-[#00D9FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">E-post *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0A0E27] border border-[#00D9FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-medium">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0A0E27] border border-[#00D9FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Ditt telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">Melding *</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0E27] border border-[#00D9FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                  placeholder="Fortell oss om ditt prosjekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-[#00D9FF]/50 transition-all transform hover:scale-[1.02]"
              >
                Send Forespørsel
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E27] border-t border-[#00D9FF]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/hoie-logo.png" alt="Høie Service AS" className="h-24 w-auto mb-4" />
              <p className="text-gray-400">
                Profesjonell energioppgradering av boliger
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: 481 18 300</p>
                <p>E-post: kenneth@hoie-service.no</p>
                <p>Flatåsen 2, 5550 Sveio</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Varmepumper</li>
                <li>Etterisolering</li>
                <li>Vindtetting</li>
                <li>Kledning</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#00D9FF]/20 text-center text-gray-400">
            <p>&copy; 2026 Høie Service AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
