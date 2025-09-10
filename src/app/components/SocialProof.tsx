import Container from "./Container";
import { Star, Users } from "lucide-react";

export default function SocialProof() {
  return (
    <div className="bg-white/90 backdrop-blur-md border-t border-gray-100/80">
      <Container className="py-5 md:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
          {/* User avatars with counter */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-medium ring-3 ring-white shadow-sm">
                A
              </span>
              <span className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium ring-3 ring-white shadow-sm">
                M
              </span>
              <span className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium ring-3 ring-white shadow-sm">
                J
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-lg font-bold text-textMain">217+</span>
              </div>
              <span className="text-xs text-textBody mt-0.5">Already joined</span>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden sm:block h-6 w-px bg-gray-200/80" aria-hidden="true" />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-textMain">4.9/5</span>
              <span className="text-xs text-textBody mt-0.5">User rating</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}