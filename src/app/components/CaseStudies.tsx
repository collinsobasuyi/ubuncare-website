import Container from "./Container";
import SectionHeading from "./SectionHeading";

const cases = [
  {
    title: "Sunday scaries → calmer Monday",
    problem: "User spirals about performance Sunday night; sleep suffers.",
    approach: "Two loops: thought record + 5-minute plan + wind-down (4-7-8).",
    outcome: "Reports 20–30% less Sunday anxiety after two weeks.",
  },
  {
    title: "Task avoidance → tiny wins",
    problem: "User avoids a writing task, feels ashamed and stuck.",
    approach: "5-minute starter + if-then plan, clear stop or continue rule.",
    outcome: "Completes starter 5 days in a row; builds writing streak.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-12 md:py-16 bg-bgSoft">
      <Container>
        <SectionHeading eyebrow="Real patterns" title="Small loops, steady progress" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl bg-white p-6 shadow">
              <h3 className="font-semibold">{c.title}</h3>
              <dl className="mt-3 text-sm md:text-base text-textBody space-y-2">
                <div><dt className="font-medium text-textMain">Problem</dt><dd>{c.problem}</dd></div>
                <div><dt className="font-medium text-textMain">Approach</dt><dd>{c.approach}</dd></div>
                <div><dt className="font-medium text-textMain">Outcome</dt><dd>{c.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
