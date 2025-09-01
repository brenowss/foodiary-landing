import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-orange-50" >
      <div className="mx-auto container px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-700 hover:bg-green-100">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by thousands of
            <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              health enthusiasts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            See how Foodiary has transformed the lives of our amazing community members.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription className="text-base text-gray-700">
                "O reconhecimento de alimentos por foto é incrível! Perdi 8kg nos primeiros 3 meses
                sem me sentir privada de nada. O app me ajuda a fazer escolhas mais conscientes todos os dias."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Usuária satisfeita"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Carla M.</p>
                  <p className="text-sm text-gray-500">Usuária Premium</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription className="text-base text-gray-700">
                "Como mãe trabalhadora, precisava de algo simples. As análises do Foodiary me ajudaram
                a entender meus padrões alimentares e fazer escolhas melhores para toda a família."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Mãe usuária"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Mariana P.</p>
                  <p className="text-sm text-gray-500">Usuária Free</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription className="text-base text-gray-700">
                "A comunidade é incrível! Conseguir suporte e ideias de receitas de pessoas com jornadas
                similares me mantém motivada. E o app é lindo e fácil de usar."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Personal trainer"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Roberto L.</p>
                  <p className="text-sm text-gray-500">Personal Trainer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
