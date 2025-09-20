import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { BookOpen, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        "Features",
        "Pricing",
        "Security",
        "API Documentation",
        "Integrations"
      ]
    },
    {
      title: "Solutions",
      links: [
        "Universities",
        "K-12 Schools",
        "Corporate Training",
        "Online Academies",
        "Certification Programs"
      ]
    },
    {
      title: "Resources",
      links: [
        "Help Center",
        "Best Practices",
        "Case Studies",
        "Webinars",
        "Blog"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press Kit",
        "Contact",
        "Privacy Policy"
      ]
    }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">EduStream</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The complete video hosting and streaming platform designed specifically 
              for educational institutions and online learning.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                contact@edustream.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-muted rounded-lg p-6 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on new features, educational trends, and platform improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 EduStream. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}