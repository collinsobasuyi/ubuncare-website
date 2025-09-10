import Container from "./Container";
import SectionHeading from "./SectionHeading";

const items = [
  { name: "A.", src: "/testimonials/a.mp4", poster: "/testimonials/a.jpg", quote: "It actually calms me instead of pinging me." },
  { name: "J.", src: "/testimonials/j.mp4", poster: "/testimonials/j.jpg", quote: "Small steps I can do, even on bad days." },
];

export default function VideoTestimonials() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <SectionHeading title="What early testers say" subtitle="Short clips from real users." />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((v) => (
            <figure key={v.name} className="rounded-2xl bg-bgCard p-4 shadow">
              <video
                className="w-full rounded-xl border"
                src={v.src}
                poster={v.poster}
                controls
                preload="metadata"
              />
              <figcaption className="mt-3 text-sm text-textBody">“{v.quote}” — {v.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
