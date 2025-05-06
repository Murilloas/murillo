"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-lg text-gray-600">Entre em contato para mais informações sobre serviços notariais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:murillo@cartoriodaenseada.com.br" className="text-gray-600 hover:text-blue-600">
                      murillo@cartoriodaenseada.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(48) 3333-4444</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">
                      Cartório da Enseada
                      <br />
                      Palhoça, Santa Catarina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda-Feira:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Terça-Feira:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quarta-Feira:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quinta-Feira:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sexta-Feira:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span>Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
