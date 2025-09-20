import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Zap, 
  Globe, 
  Lock, 
  TrendingUp, 
  Clock, 
  Smartphone,
  CheckCircle
} from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast Performance",
      description: "Optimized video delivery with CDN integration for instant streaming worldwide"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Global Accessibility",
      description: "Support for multiple languages and accessibility features for inclusive learning"
    },
    {
      icon: <Lock className="h-8 w-8 text-red-500" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect sensitive educational content"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Scalable Infrastructure",
      description: "Handle thousands of concurrent users with auto-scaling cloud infrastructure"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock access to courses with 99.9% uptime guarantee"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      title: "Mobile Optimized",
      description: "Perfect experience across all devices with responsive design and mobile apps"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 2s", label: "Average Load Time" },
    { number: "500+", label: "Educational Institutions" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Why Choose EduStream</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the Future of Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with educational expertise to deliver 
            the most comprehensive video learning solution available.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Educators Worldwide</h3>
            <p className="text-lg opacity-90">
              Join hundreds of institutions already transforming education with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Complete video hosting solution",
              "Advanced analytics and reporting",
              "Multi-device compatibility",
              "Secure content protection",
              "Customizable branding options",
              "Integration with existing LMS"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}