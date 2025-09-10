import Container from "./Container";

export default function LogoCloud() {
  return (
    <section className="py-10 bg-white">
      <Container>
        <p className="text-center text-xs text-textBody mb-6">
          Backed by evidence-based methods and modern security
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          <div className="h-10 bg-bgSoft rounded-md" />
          <div className="h-10 bg-bgSoft rounded-md" />
          <div className="h-10 bg-bgSoft rounded-md" />
          <div className="h-10 bg-bgSoft rounded-md" />
        </div>
      </Container>
    </section>
  );
}
