import Container from "./Container";
import { ArrowRight, Sparkles, Heart, Shield } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-purple-100/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <Container className="text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-primary mb-6 shadow-sm border border-gray-100">
            <Sparkles className="h-4 w-4" />
            Limited spots available
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">steadier days</span>?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-textBody leading-relaxed mb-8">
            Join thousands who are taking the first step toward better mental health. 
            Get early access to our private beta and start your journey today.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-sm text-textBody">
              <Heart className="h-4 w-4 text-pink-500" />
              Compassionate support
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-textBody">
              <Shield className="h-4 w-4 text-primary" />
              Private & secure
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-textBody">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Early access
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#join"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Join Waitlist Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Additional reassurance */}
          <div className="mt-6">
            <p className="text-sm text-textBody/70">
              No credit card required • Join 217+ people on the waitlist
            </p>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-textBody">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-600 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-2 border-white"></div>
              </div>
              <span>217+ people joined</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <span>4.9/5 from early users</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}