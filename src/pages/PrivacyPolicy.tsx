export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">"Messengers" Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 22, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information Collected</h2>
            <p>The app does not collect personal information from users without their consent. However, third-party services such as Google AdMob and Firebase may collect device information (device model, operating system, IP address, etc.).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use of Information</h2>
            <p>The information collected is used solely to improve the app's services, troubleshoot errors, and enhance the user experience. This information is not shared with third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google AdMob (Advertising)</li>
              <li>Google Firebase (Analytics and error reporting)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Children's Privacy</h2>
            <p>The app does not knowingly collect personal information from children under the age of 13. If such a situation is detected, the information will be deleted immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Changes</h2>
            <p>This privacy policy may be updated from time to time. Updates will be shared on this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p>Contact us with any questions:</p>
            <p className="mt-2">📧 erptechnik@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}