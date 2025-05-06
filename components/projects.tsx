import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing, inventory management, and customer accounts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, file sharing, and team communication.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "Responsive Design"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application providing real-time forecasts, historical data, and location-based services.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-3xl text-gray-500 md:text-lg">
            A selection of my recent work, showcasing my skills and expertise in web development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
