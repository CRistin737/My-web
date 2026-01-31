import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700">
                        <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-primary/10">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-medium text-primary tracking-wide">Aceptando nuevos pacientes</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.15]">
                            Cuidado médico <br />
                            <span className="text-primary italic">humano y de excelencia</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
                            Clínica especializada en medicina integral. Tecnología de vanguardia con el trato cercano que su salud merece.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Agendar Cita
                            </button>
                            <button className="h-12 px-8 rounded-lg bg-white text-foreground border border-muted hover:border-primary/30 font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                600 123 4567
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-4 border-t border-muted-foreground/10">
                            <div>
                                <div className="text-3xl font-heading font-bold text-primary">15+</div>
                                <div className="text-sm text-muted-foreground">Años de experiencia</div>
                            </div>
                            <div>
                                <div className="text-3xl font-heading font-bold text-primary">10k+</div>
                                <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Placeholder */}
                    <div className="relative animate-in slide-in-from-right duration-700 delay-200">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                            {/* Placeholder mimicking a high-quality clinic shot */}
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="font-heading text-xl">Imagen: Doctora atendiendo paciente</span>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <ArrowRight className="w-6 h-6 -rotate-45" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-foreground">Dra. Ana López</div>
                                    <div className="text-xs text-muted-foreground">Especialista en Cardiología</div>
                                </div>
                                <div className="ml-auto flex text-yellow-500">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
