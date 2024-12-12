import Link from "next/link"
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 relative">
      <div className="container mx-auto max-w-7xl font-sans font-['Averta_ExtraBold']">
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Portes Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">portes</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg hover:opacity-70">logiciels</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">bétonite</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">Sur mesure</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">porte invisible</Link></li>
            </ul>
          </div>

          {/* Polygones Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Polygones</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg hover:opacity-70">Aluminium</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">Zinc</Link></li>
            </ul>
          </div>

          {/* À propos Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">À propos</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg hover:opacity-70">Qui sommes-nous</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">?</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">Notre Équipe</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">Engagement RSE</Link></li>
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Ressources</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg hover:opacity-70">Actualités</Link></li>
              <li><Link href="#" className="text-lg hover:opacity-70">Blog</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Social</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg hover:opacity-70">LinkedIn</Link></li>
            </ul>
          </div>
        </nav>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-lg mb-12">
          <Link href="#" className="hover:opacity-70">Mentions légales</Link>
          <Link href="#" className="hover:opacity-70">CGV</Link>
          <Link href="#" className="hover:opacity-70">Politique de confidentialité</Link>
        </div>

        {/* Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lg mb-16">
          <span className="mb-4 md:mb-0">Lalourde inc.</span>
          <span>Tous droits réservés.</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-16">
          <img 
            src="/logo.svg" 
            alt="La Lourde Logo" 
            className="h-auto w-full max-w-[800px]"
          />
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-8 bottom-8 bg-zinc-800 rounded-full p-4 hover:bg-zinc-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  )
}

