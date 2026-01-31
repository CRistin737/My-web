import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
    return (
        <div className="group relative p-6 bg-background rounded-lg shadow-card border theme-border border-secondary flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>

            {/* Decorative element for some themes? ex: Vintage maybe adds a line */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg pointer-events-none transition-colors" />
        </div>
    );
}
