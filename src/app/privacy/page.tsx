import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ubuncare",
  description: "How Ubuncare handles your data. Short version: we don't collect it.",
};

const sections = [
  {
    title: "Who we are",
    body: `Ubuncare is a personal mental-wellness app. This policy explains how we handle data when you use the Ubuncare mobile app or visit this website.`,
  },
  {
    title: "What we collect — and what we don't",
    body: `The Ubuncare mobile app stores all your data — mood check-ins, conversations, journal entries, and wellness history — locally on your device. Nothing is uploaded to our servers. We have no access to it.

The only personal information we collect is your email address, and only if you voluntarily join our waitlist. We use it solely to notify you when the app launches. We do not use it for marketing, profiling, or any other purpose.`,
  },
  {
    title: "Cookies and tracking",
    body: `This website does not use advertising cookies, tracking pixels, or analytics that identify you personally. We may use basic, anonymous analytics (such as page view counts) to understand how the site is used. No personal data is involved.`,
  },
  {
    title: "Third-party services",
    body: `We do not sell, share, or transfer your personal data to third parties. If we use a third-party service to send launch notifications (e.g. an email provider), that provider processes your email address only to deliver the email. They are contractually prohibited from using it for any other purpose.`,
  },
  {
    title: "Your rights",
    body: `Under UK GDPR and the Data Protection Act 2018, you have the right to:

• Access the personal data we hold about you
• Request correction or deletion of your data
• Withdraw consent at any time
• Lodge a complaint with the Information Commissioner's Office (ICO)

To exercise any of these rights, email us at: privacy@ubuncare.app`,
  },
  {
    title: "Data retention",
    body: `If you join our waitlist, we retain your email address until the app launches or until you ask us to remove it — whichever comes first. Once we've sent your launch notification, your email is deleted unless you opt in to further communications.`,
  },
  {
    title: "Children",
    body: `Ubuncare is intended for users aged 18 and over. We do not knowingly collect data from anyone under 18. If you believe we have inadvertently received data from a minor, please contact us immediately.`,
  },
  {
    title: "Changes to this policy",
    body: `If we update this policy materially, we will post the updated version here with a revised date. Continued use of the app or website after changes take effect constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `Questions about this policy? Email us at: privacy@ubuncare.app`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDFAF6" }}>
      {/* Header */}
      <div className="py-16 md:py-20" style={{ backgroundColor: "#1D6B52" }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }} className="text-base">
            Last updated: April 2026
          </p>
        </div>
      </div>

      {/* Summary banner */}
      <div className="border-b" style={{ backgroundColor: "#EBF5F0", borderColor: "#2E9B7840" }}>
        <div className="max-w-3xl mx-auto px-6 py-5">
          <p className="text-sm font-semibold" style={{ color: "#1D6B52" }}>
            Short version: The Ubuncare app stores everything on your device. We never upload your conversations, mood data, or journal entries. The only data we may hold is your email address if you join our waitlist.
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
          Ubuncare is not a medical or clinical service.{" "}
          <Link href="/terms" className="underline" style={{ color: "#1D6B52" }}>Terms of Use</Link>
          {" "}·{" "}
          <Link href="/" className="underline" style={{ color: "#1D6B52" }}>Back to home</Link>
        </p>
      </div>
    </main>
  );
}
