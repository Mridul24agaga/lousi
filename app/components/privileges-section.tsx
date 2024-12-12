"use client"

import { motion, useInView } from "framer-motion"
import { useRef, RefObject } from "react"

interface Privilege {
  icon: string;
  title: string;
  description: string;
}

const privileges: Privilege[] = [
  {
    icon: "/pack.gif",
    title: "QUALITÉ DES PRODUITS",
    description: "LA LOURDE GARDE COMME EXIGENCE PREMIÈRE LA QUALITÉ DES PRODUITS ET UN ENGAGEMENT TOTAL À SATISFAIRE LES BESOINS DE SES CLIENTS GARANTISSANT L'ORIGINALITÉ DU CARACTÈRE ARCHITECTURAL OU DES PROJETS DE RÉNOVATION."
  },
  {
    icon: "/money.gif",
    title: "TARIFICATION DÉGRESSIVE",
    description: "ALORS QUE LE PRIX DES MATÉRIAUX DE CONSTRUCTION FLAMBE, LA LOURDE RESTE FIDÈLE À SA CLIENTÈLE. NOTRE POLITIQUE, OFFRIR DES PRODUITS JADIS RÉSERVÉS AU MARCHÉ DU LUXE À DES TARIFS DÉGRESSIFS ET APPLICABLES À VOS DIFFÉRENTS PROGRAMMES."
  },
  {
    icon: "/load.gif",
    title: "INSTALLATION SIMPLIFIÉE",
    description: "LES CONCEPTEURS ET LES INGÉNIEURS DE NOS PRODUITS SONT TOUS ISSUS DU BÂTIMENT. NOUS AVONS UNE CONNAISSANCE PARFAITE DES CONTRAINTES TERRAINS. TOUS NOS PRODUITS SONT RÉFLÉCHIS ET CONÇUS POUR UNE APPLICATION FACILE ET UNE FINITION OPTIMALE."
  },
  {
    icon: "/msg.gif",
    title: "SAV 7/7J",
    description: "CHEZ NOUS, LE CÔTÉ HUMAIN PASSE AVANT TOUT. NOS COMMERCIAUX ET DIRIGEANTS VOUS DONNENT LEURS LIGNES DIRECTES ET SONT DISPONIBLES POUR VOUS ACCOMPAGNER TOUT AU LONG ET AU DELÀ DE VOTRE PROJET. NOS ENTREPÔTS NOUS PERMETTENT D'AVOIR UNE GRANDE DISPONIBILITÉ SUR NOS PIÈCES DÉTACHÉES."
  },
  {
    icon: "/security.gif",
    title: "ENGAGEMENT RSE",
    description: "LA LOURDE S'ENGAGE ACTIVEMENT DANS UNE DÉMARCHE DE RESPONSABILITÉ SOCIÉTALE. NOUS PLANTONS UN ARBRE POUR CHAQUE PORTE ACHETÉE. DE PLUS, NOS MATÉRIAUX BOIS SONT CERTIFIÉS FSC OU PEFC, GARANTISSANT LEUR ORIGINE DURABLE."
  },
  {
    icon: "/box.gif",
    title: "TOUJOURS EN STOCK",
    description: "NOTRE SYSTÈME D'INVENTAIRE EST CONÇU POUR ASSURER UNE DISPONIBILITÉ CONSTANTE DE NOS PRODUITS. QUE VOUS AYEZ BESOIN DE PORTES EN GRANDE QUANTITÉ OU DE MODÈLES SPÉCIFIQUES, NOUS GARANTISSONS DES STOCKS RÉGULIERS ET UNE ACCESSIBILITÉ IMMÉDIATE POUR RÉPONDRE À TOUS VOS BESOINS."
  }
]

type MotionComponentProps = {
  children?: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  ref?: React.RefObject<HTMLElement>;
}

const MotionDiv = motion.div as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLDivElement>>
const MotionImg = motion.img as React.ComponentType<MotionComponentProps & React.ImgHTMLAttributes<HTMLImageElement>>
const MotionH3 = motion.h3 as React.ComponentType<MotionComponentProps>
const MotionP = motion.p as React.ComponentType<MotionComponentProps>
const MotionH2 = motion.h2 as React.ComponentType<MotionComponentProps>

interface PrivilegeCardProps {
  privilege: Privilege;
  index: number;
}

const PrivilegeCard = ({ privilege, index }: PrivilegeCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionDiv
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-8 border-b border-r border-gray-200 last:border-b-0 md:even:border-r-0"
    >
      <MotionImg 
        src={privilege.icon} 
        alt={privilege.title} 
        className="w-8 h-8 mb-4"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <MotionH3 
        className="text-lg font-['Averta_ExtraBold'] mb-4 text-black"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {privilege.title}
      </MotionH3>
      <MotionP 
        className="text-sm text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {privilege.description}
      </MotionP>
    </MotionDiv>
  )
}

export default function PrivilegesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionDiv 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionImg 
            src="/svasg.svg" 
            className="w-8 h-8" 
            alt="Quality Icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <MotionH2 
            className="text-2xl sm:text-3xl md:text-4xl font-['Averta_ExtraBold'] text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Les privilèges d&apos;un partenariat avec
            <br />
            La Lourde
          </MotionH2>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
          {privileges.map((privilege, index) => (
            <PrivilegeCard key={privilege.title} privilege={privilege} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

