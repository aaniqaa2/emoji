import React from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Head>
        <title>Terms and Conditions - EmojiExplorer.xyz</title>
        <meta name="description" content="Terms and Conditions for EmojiExplorer.xyz" />
      </Head>

      <main className="prose prose-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Terms and Conditions for EmojiExplorer.xyz</h2>
        <p>
          Welcome to Emojiexplorer.xyz ("Site"). These Terms and Conditions ("Terms") govern your use of the Site and its services, including accessing, browsing, and using our emoji selection tools.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
        <p>
          By using the Site, you signify your agreement to these Terms. If you do not agree, please do not use the Site. We reserve the right to modify these Terms at any time, and your continued use following such changes constitutes acceptance of the revised Terms.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Emojiexplorer, you agreed to use cookies in agreement with Emojiexplorer's Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">License</h2>
        <p>
          Unless otherwise stated, Emojiexplorer.xyz and/or its licensors own the intellectual property rights for all material on Emojiexplorer.xyz. All intellectual property rights are reserved. You may access this from Emojiexplorer.xyz for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
        <p>Emojiexplorer.xyz provides a service allowing users to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Search and browse a database of emojis</li>
          <li>Copy emojis to their clipboard for use on other websites and applications</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
        <h3 className="text-xl font-bold mt-6 mb-2">Emoji Ownership:</h3>
        <p>
          The individual emojis displayed on Emojiexplorer.xyz are the intellectual property of their respective creators or trademark holders. Emojiexplorer.xyz does not claim ownership of these emojis.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Site Content:</h3>
        <p>
          All content on the Site, aside from individual emojis, including text, graphics, logos, code, and software, is the property of Emojiexplorer.xyz or its licensors and is protected by copyright and trademark laws.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">User Conduct</h2>
        <p>You agree to use Emojiexplorer.xyz only for lawful purposes and in a way that does not:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Infringe on the intellectual property or other rights of Emojiexplorer.xyz or third parties.</li>
          <li>Violate any applicable laws or regulations.</li>
          <li>Distribute spam, malware, or other harmful content.</li>
          <li>Attempt to disrupt or interfere with the Site's operation.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
        <p>
          Emojiexplorer.xyz is provided "as is" without any warranties. We disclaim all express and implied warranties, including those of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free operation of the site.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
        <p>
          Emojiexplorer.xyz is not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the site, including lost profits or business interruptions.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed under the laws of the State of Gujarat, India. Any disputes shall be resolved exclusively in the courts located within Ahmedabad, Gujarat.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <p>
          If you have any questions regarding these Terms, please contact us at <a href="mailto:contact@emojiexplorer.xyz">contact@emojiexplorer.xyz</a>.
        </p>
        
        <p className="mt-8 italic">Effective Date: March 14, 2025</p>
      </main>
    </div>
  );
}