import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Murillo Alano de Souza</h1>
          <p className="text-xl text-gray-600">Escrevente Notarial no Cartório da Enseada</p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Entre em Contato
            </a>
            <a href="#about" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Saiba Mais
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Murillo Alano de Souza"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
