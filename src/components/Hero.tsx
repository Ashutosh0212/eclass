import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Users, BookOpen, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc1ODM3MzcyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students learning online"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 max-w-4xl mx-auto leading-tight">
          Transform Education with Our 
          <span className="text-white/90"> Video Learning Platform</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed">
          Complete college video hosting and streaming portal with advanced course management, 
          secure access controls, and comprehensive analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-base px-10 py-4 bg-white text-black hover:bg-white/90">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="text-base px-10 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-semibold">50,000+</div>
            <div className="text-white/70 text-sm">Active Students</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-semibold">1,200+</div>
            <div className="text-white/70 text-sm">Courses Available</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-semibold">95%</div>
            <div className="text-white/70 text-sm">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}