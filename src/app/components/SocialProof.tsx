import Container from "./Container";
import { Users, ShieldCheck } from "lucide-react";

export default function SocialProof() {
  return (
    <div className="bg-white/80 backdrop-blur-md border-t border-gray-100/70 shadow-sm">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Avatars + Counter */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "M", "J"].map((letter, i) => (
                <span
                  key={i}
                  className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-medium ring-2 ring-white shadow-sm"
                >
                  {letter}
                </span>
              ))}
              <span className="h-10 w-10 grid place-items-center rounded-full bg-gray-200 text-textMain text-xs font-medium ring-2 ring-white">
                +214
              </span>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-lg font-bold text-textMain">217+</span>
              </div>
              <span className="text-sm text-textBody mt-0.5">Already joined the waitlist</span>
            </div>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-2 text-sm text-textBody bg-gray-50 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Your conversations are always private and secure</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
