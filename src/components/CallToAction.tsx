import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Trusted by 500+ Institutions
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-blue-600"> Educational Experience?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educators and students already using our platform to deliver 
            exceptional online learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              Start Free 30-Day Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Platform Demo
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30 Days</div>
                <div className="text-sm text-muted-foreground">Free Trial Period</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5 Minutes</div>
                <div className="text-sm text-muted-foreground">Quick Setup Time</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            No credit card required • Cancel anytime • Full feature access
          </div>
        </div>
      </div>
    </section>
  );
}