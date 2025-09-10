import Container from "./Container";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-20 bg-white">
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-bgSoft px-3 py-1 text-xs font-medium text-textBody">
            CBT-informed · AI-assisted
          </span>

          <h1 className="mt-4 text-h1 text-textMain">Gentle support for tough days.</h1>
          <p className="mt-4 text-body text-textBody">
            Ubuncare blends proven CBT techniques with an empathetic AI guide.
            Track feelings, reframe thoughts, and build habits that stick.
          </p>

          <div className="mt-8" id="join">
            <WaitlistForm />
            <p className="mt-2 text-xs text-textBody">No spam. We’ll email when the beta is ready.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-6 bg-white">
          <div className="aspect-[9/16] w-full rounded-2xl border bg-bgSoft grid place-content-center">
            <span className="text-sm text-textBody">App preview coming soon</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
