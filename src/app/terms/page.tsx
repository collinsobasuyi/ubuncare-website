import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Ubuncare",
  description: "Terms governing your use of the Ubuncare app and website.",
};

const sections = [
  {
    title: "About Ubuncare",
    body: `Ubuncare is a personal mental-wellness application. It is designed to support self-reflection, emotional awareness, and general wellbeing through guided mood check-ins, breathing exercises, and guided conversations.

Ubuncare is not a medical device, a clinical service, a therapy service, or a crisis intervention service. It does not provide diagnosis, treatment, or professional mental health advice.`,
  },
  {
    title: "Who can use Ubuncare",
    body: `Ubuncare is intended for users aged 18 and over. By using the app or this website, you confirm that you are at least 18 years old.

Ubuncare is not designed for use by individuals in acute psychiatric crisis or as a replacement for professional care. If you are experiencing a mental health emergency, please contact your local emergency services or a crisis helpline immediately.`,
  },
  {
    title: "Not a substitute for professional care",
    body: `Nothing in Ubuncare, including guided conversations, mood reflections, or wellness tools, constitutes medical advice, psychological treatment, or a clinical recommendation.

Always seek the advice of a qualified mental health professional for concerns about your mental health. Do not disregard professional advice or delay seeking it because of something you read or experienced in Ubuncare.`,
  },
  {
    title: "Crisis situations",
    body: `If you are in immediate danger or experiencing a mental health crisis, do not rely on Ubuncare. Please contact:

• Emergency services: 999
• Samaritans: 116 123 (free, 24/7)
• Shout text line: text SHOUT to 85258
• NHS 111 for non-emergency mental health support

Ubuncare provides a link to crisis resources within the app and on this website at all times.`,
  },
  {
    title: "Acceptable use",
    body: `You agree to use Ubuncare only for its intended purpose: personal wellbeing support. You must not:

• Attempt to reverse-engineer, copy, or redistribute the app
• Use the app to harm yourself or others
• Misrepresent the app's capabilities to others
• Use the app in any way that violates applicable laws`,
  },
  {
    title: "Intellectual property",
    body: `All content, design, copy, and code in the Ubuncare app and website are the intellectual property of Ubuncare. You may not reproduce, distribute, or create derivative works without written permission.`,
  },
  {
    title: "Limitation of liability",
    body: `To the fullest extent permitted by law, Ubuncare and its creators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the app or website, including (without limitation) any emotional distress, reliance on app content, or decisions made based on mood data or reflections.

Use of Ubuncare is at your own risk.`,
  },
  {
    title: "Governing law",
    body: `These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "Changes to these terms",
    body: `We may update these terms from time to time. Material changes will be communicated via the app or this website. Continued use after changes take effect constitutes acceptance.`,
  },
  {
    title: "Contact",
    body: `Questions about these terms? Email us at: legal@ubuncare.app`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDFAF6" }}>
      {/* Header */}
      <div className="py-16 md:py-20" style={{ backgroundColor: "#1D6B52" }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of Use
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)" }} className="text-base">
            Last updated: April 2026
          </p>
        </div>
      </div>

      {/* Important notice */}
      <div className="border-b" style={{ backgroundColor: "#FCEBEB", borderColor: "#C6282830" }}>
        <div className="max-w-3xl mx-auto px-6 py-5">
          <p className="text-sm font-semibold" style={{ color: "#C62828" }}>
            Important: Ubuncare is not a therapy service, medical device, or crisis intervention tool. If you are in danger or distress, please call 999 or Samaritans on 116 123.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A2420" }}>{s.title}</h2>
            <div className="text-base leading-relaxed whitespace-pre-line" style={{ color: "#4A5E57" }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t py-8" style={{ borderColor: "#E2EBE6" }}>
        <p className="text-center text-sm" style={{ color: "#4D7068" }}>
          <Link href="/privacy" className="underline" style={{ color: "#1D6B52" }}>Privacy Policy</Link>
          {" "}·{" "}
          <Link href="/" className="underline" style={{ color: "#1D6B52" }}>Back to home</Link>
        </p>
      </div>
    </main>
  );
}
