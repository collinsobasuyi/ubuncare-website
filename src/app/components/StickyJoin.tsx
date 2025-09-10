export default function StickyJoin() {
    return (
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
        <a
          href="#join"
          className="block w-full text-center rounded-full bg-primary-strong text-white px-5 py-3 font-semibold shadow"
        >
          Join Waitlist
        </a>
      </div>
    );
  }
  