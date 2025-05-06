import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "Python", level: 75 },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "Communication",
    "Adaptability",
    "Attention to Detail",
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-3xl text-gray-500 md:text-lg">
            A combination of technical expertise and soft skills that help me deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "VS Code",
                  "Figma",
                  "Docker",
                  "AWS",
                  "MongoDB",
                  "PostgreSQL",
                  "Redux",
                  "Tailwind CSS",
                  "GraphQL",
                ].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
