export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">9-5 Reset — Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Google Calendar Data: Access, Use, and Purpose</h2>
        <p className="mb-3">
          9-5 Reset requests read-only access to your Google Calendar (calendar.readonly scope) for a
          single, specific purpose: to detect free time windows between your scheduled meetings, so the
          extension can suggest short movement/stretch sessions during those gaps.
        </p>
        <p className="mb-3">
          <strong>What we access:</strong> Only event start times and end times. We do not access event
          titles, descriptions, attendee lists, locations, attachments, or any other event content.
        </p>
        <p className="mb-3">
          <strong>How we use it:</strong> Event start/end times are read and processed entirely within
          your local browser, in real time, to calculate gaps in your schedule. This calculation happens
          on-device only.
        </p>
        <p className="mb-3">
          <strong>How we handle and store it:</strong> Calendar data is never transmitted to, or stored
          on, any server we control. It is held temporarily in your browser&apos;s local extension storage
          only for as long as needed to detect the next available gap, and is overwritten on each
          refresh. We do not retain a history of your calendar data.
        </p>
        <p className="mb-3">
          <strong>Who we share it with:</strong> We do not sell, rent, share, or transfer your Google
          Calendar data to any third party, advertiser, or analytics provider, under any circumstance.
        </p>
        <p className="mb-3">
          <strong>Revoking access:</strong> You can revoke 9-5 Reset&apos;s access to your Google
          Calendar at any time via your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Account permissions page
          </a>
          . Doing so immediately stops all calendar data access; the extension will fall back to manual
          schedule entry.
        </p>
        <p>
          This use of Google user data complies with the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Account Sign-In (Email)</h2>
        <p className="mb-3">
          If you choose to sign in, 9-5 Reset asks for your email address and sends a one-time 6-digit
          code — there are no passwords.
        </p>
        <p className="mb-3">
          <strong>What we collect:</strong> Your email address, and a session token that keeps you
          signed in between uses.
        </p>
        <p className="mb-3">
          <strong>How we store it:</strong> Your email is stored in our authentication system (provided
          by Supabase). The session token is stored locally in your browser&apos;s extension storage so
          you don&apos;t have to sign in every time you open the extension.
        </p>
        <p className="mb-3">
          <strong>Why we collect it:</strong> Solely to identify your account and check whether it has
          Pro access. We do not use your email for anything else unless you separately opt in to product
          update emails (see below).
        </p>
        <p>
          <strong>Signing out:</strong> Signing out clears your local session immediately. It does not
          delete your account record — see &quot;Data Retention and Deletion&quot; below for that.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Pro Subscription &amp; Payments</h2>
        <p className="mb-3">
          If you upgrade to Pro, payment is handled entirely by our payment processor,{" "}
          <a
            href="https://polar.sh"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polar
          </a>{" "}
          — we never see or store your card details.
        </p>
        <p className="mb-3">
          <strong>What we store:</strong> Once a payment succeeds, Polar notifies our server, and we
          store your email address, Pro status (on/off), plan type (lifetime or monthly), a Polar
          customer reference ID, and the date this was last updated. This is kept in our database
          (Supabase) so the extension can check your Pro status.
        </p>
        <p className="mb-3">
          <strong>Who can access this:</strong> Only our server, using a private key that is never
          included in the extension or visible to anyone installing it. Polar also retains your payment
          information under its own privacy policy, since they are the ones processing the charge.
        </p>
        <p>
          <strong>Why we collect it:</strong> Solely to unlock Pro features (calendar sync, unlimited
          sessions) for the email address you paid with, and to handle subscription cancellations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Contact / Product Updates Opt-In</h2>
        <p className="mb-3">
          During setup, you can optionally check a box to receive occasional product update emails.
        </p>
        <p className="mb-3">
          <strong>What happens if you check it:</strong> Your email address and the date you opted in are
          sent to a Google Sheet (via a Google Apps Script) that we use to manage our update mailing
          list.
        </p>
        <p className="mb-3">
          <strong>What happens if you don&apos;t:</strong> Nothing — this is entirely optional and
          unchecked by default.
        </p>
        <p>
          <strong>Opting out:</strong> Contact us (below) to be removed from this list at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Other Data We Collect</h2>
        <p className="mb-3">
          We collect anonymous, non-personal usage data (e.g. number of sessions completed,
          notifications shown) solely to understand product engagement and improve the extension. This
          usage data is not derived from or linked to your Google Calendar content, and does not include
          personal health information.
        </p>
        <p>
          This is separate from, and does not include, the email-based account and subscription data
          described above — that data is tied to your email address, not anonymous, and is covered by
          the sections above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Third Parties We Work With</h2>
        <p className="mb-3">
          We rely on a small number of service providers to operate 9-5 Reset, each of which only
          processes the data described in the relevant section above, under their own privacy policies:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Google</strong> — Calendar API (read-only event times, see above) and Google
            Sheets/Apps Script (only if you opt in to product updates).
          </li>
          <li>
            <strong>Supabase</strong> — hosts our authentication system and database (account email,
            session handling, Pro subscription status).
          </li>
          <li>
            <strong>Polar</strong> — processes payments for Pro upgrades and holds your billing/payment
            details.
          </li>
          <li>
            <strong>Vercel</strong> — hosts our landing page and the server-side code that receives
            payment notifications from Polar.
          </li>
        </ul>
        <p>We do not sell your data to any of these providers or to anyone else.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Data Retention and Deletion</h2>
        <p className="mb-3">
          <strong>Calendar data:</strong> Never stored by us in the first place, as described above.
        </p>
        <p className="mb-3">
          <strong>Account, email, and subscription data:</strong> Retained for as long as you have an
          account or an active/past subscription, so we can verify Pro access and handle support or
          billing questions.
        </p>
        <p>
          <strong>Deletion:</strong> You can request deletion of your account, email, and subscription
          record at any time by contacting us at the email below. We will delete it promptly upon
          request.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>
          For any privacy questions:{" "}
          <a
            href="mailto:bukeyeva.damira@gmail.com"
            className="underline hover:opacity-70"
          >
            bukeyeva.damira@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
