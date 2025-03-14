import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Head>
        <title>Privacy Policy - EmojiExplorer.xyz</title>
        <meta name="description" content="Privacy Policy for EmojiExplorer.xyz" />
      </Head>

      <main className="prose prose-lg">
        <h1 className="text-3xl font-bold mb-6">EmojiExplorer.xyz Privacy Policy</h1>
        <p>
          Emojicopy.net values the privacy of its users. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your personal data.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-xl font-bold mt-6 mb-2">Usage Data:</h3>
        <p>
          We may collect information about how you access and use our Site, including your device type, browser information, IP address, pages visited, and time spent on the Site. This is primarily collected through standard web analytics tools.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Cookies:</h3>
        <p>
          We may use cookies (small data files) to store preferences and improve your experience on the Site. You can control cookies through your browser settings.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <h3 className="text-xl font-bold mt-6 mb-2">Provide and Improve Services:</h3>
        <p>
          We use your information to operate <strong>Emojiexplorer.xyz</strong>, analyze usage trends, and make improvements to the Site.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Limited Sharing:</h3>
        <p>
          We may share your non-personally identifiable information with our third-party analytics providers to gain insights into Site usage.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
        <h3 className="text-xl font-bold mt-6 mb-2">Cookies:</h3>
        <p>
          You can adjust your browser settings to manage or block cookies. Please note this may affect certain website functions.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Data Requests:</h3>
        <p>
          You may contact us to request access to or modification of any limited personal data we may hold.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
        <p>
          We implement reasonable measures to protect your information, but no data transmission over the internet can be fully guaranteed as secure.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
        <p>
          Emojiexplorer.xyz is not intended for children under 13. We do not knowingly collect personal information from children under 13.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post any changes with a revised "Effective Date." Your continued use of the Site following changes indicates your acceptance of the updated Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:support@emojiexplorer.xyz">support@emojiexplorer.xyz</a>.
        </p>
      </main>
    </div>
  );
}