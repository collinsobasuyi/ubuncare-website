import Container from "./Container";

export default function HeroInteractive() {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white">
      <Container className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-bgSoft px-3 py-1 text-xs font-medium text-textBody">
            CBT-informed · AI-assisted
          </span>

          <h1 className="mt-4 text-[30px] md:text-[40px] lg:text-[48px] font-bold text-textMain">
            Gentle support for tough days.
          </h1>

          <p className="mt-4 text-base md:text-lg text-textBody">
            Feel clearer, one small step at a time—practical CBT tools and a compassionate guide when you need them.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <a href="#join" className="rounded-full bg-primary-strong text-white px-5 py-3 font-semibold shadow hover:opacity-90">
              Join Waitlist
            </a>
            <a href="#how" className="text-textMain underline underline-offset-4">See how it works</a>
          </div>

          <p className="mt-3 text-xs md:text-sm text-textBody">Private by design. You control your data.</p>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-2xl shadow p-3 md:p-4 bg-bgCard">
            <div className="relative aspect-[16/10] md:aspect-[9/7] w-full overflow-hidden rounded-xl border bg-bgSoft">
              {/* Replace /hero.mp4 with your short loop (6–12s), 1200x700 approx */}
              <video
                className="h-full w-full object-cover"
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Short preview of Ubuncare interactions"
                poster="/hero-poster.jpg"
              />
              {/* If you don’t have a video yet, drop an image at /hero-poster.jpg and remove <video>. */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
