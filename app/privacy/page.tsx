export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">9-5 Reset — Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Calendar data</h2>
        <p className="mb-3">
          9-5 Reset requests read-only access to your Google Calendar solely to detect free windows
          between your meetings. We read event start and end times only. We do not read meeting
          titles, descriptions, attendees, or any other meeting content. Calendar data is processed
          locally in your browser and is never sent to or stored on our servers.
        </p>
        <p>We do not sell, share, or transfer your calendar data to any third party.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Data we collect</h2>
        <p>
          We collect your email address when you join our waitlist. We collect anonymous usage data
          (sessions completed, notifications received) to improve the product. We do not collect
          personal health information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>
          For any privacy questions:{" "}
          <a
            href="mailto:bukeevadamira1@gmail.com"
            className="underline hover:opacity-70"
          >
            bukeevadamira1@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
