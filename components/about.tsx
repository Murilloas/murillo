import { MapPin, Clock, FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre</h2>
          <p className="text-lg text-gray-600">
            Profissional dedicado com experiência em serviços notariais, atuando no Cartório da Enseada em Palhoça-SC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Localização</h3>
            <p className="text-gray-600">
              Cartório da Enseada
              <br />
              Palhoça, Santa Catarina
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Horário</h3>
            <p className="text-gray-600">
              Segunda a Sexta
              <br />
              9:00 - 17:00
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Serviços</h3>
            <p className="text-gray-600">
              Serviços Notariais
              <br />
              Documentação Legal
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Experiência Profissional</h3>
          <p className="text-gray-600 mb-4">
            Como Escrevente Notarial no Cartório da Enseada, sou responsável por auxiliar no preparo e processamento de
            documentos legais, atender ao público e garantir que todos os procedimentos estejam em conformidade com as
            leis e regulamentos vigentes.
          </p>
          <p className="text-gray-600">
            Meu compromisso é oferecer um serviço de qualidade, com atenção aos detalhes e foco na satisfação dos
            clientes, assegurando que todos os documentos sejam processados com precisão e dentro dos prazos
            estabelecidos.
          </p>
        </div>
      </div>
    </section>
  )
}
