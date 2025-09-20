import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Users, 
  Video, 
  Shield, 
  BarChart3, 
  Search, 
  MessageSquare,
  Upload,
  PlayCircle,
  UserCheck,
  Settings
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Multi-Role Login System",
      description: "Secure authentication for Admins, Teachers, and Students with role-based access controls and permissions.",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgzMjUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Admin user management", "Teacher course creation", "Student enrollment tracking"]
    },
    {
      icon: <Video className="h-8 w-8 text-green-500" />,
      title: "Advanced Course Management",
      description: "Comprehensive tools for teachers to create, organize, and manage video content with flexible course structures.",
      image: "https://images.unsplash.com/photo-1526698905402-e13b880ad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHN0cmVhbWluZyUyMGNvdXJzZSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU4MzczNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Video upload & organization", "Lecture scheduling", "Content tagging system"]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Secure Video Streaming",
      description: "Adaptive streaming with robust security measures ensuring only authorized students can access course content.",
      image: "https://images.unsplash.com/photo-1620650764255-6797e68c7904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NTgzNzM3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["HLS/DASH support", "Bandwidth optimization", "Access control security"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: "Student Analytics & Tracking",
      description: "Comprehensive dashboard for tracking student progress, engagement metrics, and detailed analytics reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODM3MzcyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Progress tracking", "Engagement analytics", "Downloadable reports"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search & Filters",
      description: "Find content quickly with advanced search by topic, date, teacher, or course."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Interactive Q&A",
      description: "Built-in commenting and question system for each video lecture."
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Bulk Upload Tools",
      description: "Efficient batch upload capabilities for large course libraries."
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "Resume Playback",
      description: "Students can continue watching from their last position automatically."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Attendance Tracking",
      description: "Monitor student participation and lecture completion rates."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Branding",
      description: "White-label solution with customizable themes and branding options."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and deliver exceptional online learning experiences
          </p>
        </div>
        
        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <ImageWithFallback 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  {feature.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Additional Capabilities</h3>
          <p className="text-lg text-muted-foreground">
            Extended features to enhance your educational platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}