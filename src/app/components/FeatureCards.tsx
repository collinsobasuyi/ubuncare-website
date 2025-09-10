import Container from "./Container";

const features = [
  { title: "Evidence-based", text: "Exercises rooted in CBT — thought records, reframing, behavioural activation." },
  { title: "Empathetic AI", text: "A calm, supportive tone that encourages, not overwhelms." },
  { title: "Daily rhythm", text: "Tiny prompts to build resilient habits over time." },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-12 md:py-20 bg-bgSoft">
      <Container>
        <h2 className="text-h2 text-textMain mb-8">What makes Ubuncare different</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-6 shadow">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-textBody">{f.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
