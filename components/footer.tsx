import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Murillo Alano de Souza</h3>
            <p className="text-gray-300 mb-4">Escrevente Notarial no Cartório da Enseada, Palhoça-SC.</p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:murillo@cartoriodaenseada.com.br" className="text-gray-300 hover:text-white">
                murillo@cartoriodaenseada.com.br
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Murillo Alano de Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
