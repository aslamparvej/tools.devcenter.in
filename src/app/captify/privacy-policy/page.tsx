import { Shield, Smartphone, BarChart3, Lock, Users, Settings, Mail, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Smartphone,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Device Information",
          text: "Device model, operating system, and app version (for improving performance)."
        },
        {
          subtitle: "Usage Data",
          text: "How you interact with the app (e.g., number of captions saved, features used)."
        },
        {
          subtitle: "Advertisements Data",
          text: "Third-party ad providers (like Google AdMob) may collect anonymized data for personalized/non-personalized ads."
        },
        {
          subtitle: "In-App Purchases Data",
          text: "If you purchase \"Remove Ads,\" payment is processed securely through Google Play Billing. We do not store your payment details."
        }
      ],
      note: "We do not collect any personally identifiable information such as your name, email, or phone number."
    },
    {
      icon: BarChart3,
      title: "2. How We Use Information",
      list: [
        "Provide and improve the Captify app.",
        "Show ads to keep the app free for all users.",
        "Process in-app purchases (e.g., removing ads).",
        "Analyze app performance and fix issues."
      ]
    },
    {
      icon: Globe,
      title: "3. Third-Party Services",
      text: "Captify uses third-party services that may collect information:",
      list: [
        "Google AdMob (for ads)",
        "Google Play Billing (for in-app purchases)",
        "Appwrite / Backend Services (for saving captions securely, if enabled)"
      ],
      note: "Each third-party service has its own privacy policy."
    },
    {
      icon: Lock,
      title: "4. Data Security",
      text: "We take reasonable measures to protect your information. However, please note that no system is 100% secure, and we cannot guarantee absolute security."
    },
    {
      icon: Users,
      title: "5. Children's Privacy",
      text: "Captify is intended for users 13 years and older. We do not knowingly collect information from children under 13. If you believe your child has provided data, please contact us so we can remove it."
    },
    {
      icon: Settings,
      title: "6. Your Choices",
      list: [
        "You can use Captify without making any purchase.",
        "You may disable personalized ads through your device settings (Google Play Services).",
        "You can uninstall the app anytime, which removes all local data stored on your device."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-slate-900">Captify</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
          <p className="text-slate-600 mb-2">
            <span className="font-semibold">Effective Date:</span> 03-10-2025
          </p>
          <p className="text-slate-700 leading-relaxed">
            Captify (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application (&quot;App&quot;).
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>

                    {section.text && (
                      <p className="text-slate-700 mb-3">{section.text}</p>
                    )}

                    {section.content && (
                      <div className="space-y-3 mb-3">
                        {section.content.map((item, i) => (
                          <div key={i} className="ml-2">
                            <span className="font-semibold text-slate-800">{item.subtitle}:</span>
                            <span className="text-slate-700"> {item.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <ul className="space-y-2 mb-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <span className="text-indigo-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-3 rounded mt-3">
                        <p className="text-slate-800 font-medium">{section.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Changes Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">7. Changes to This Privacy Policy</h3>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. Updates will be posted here with a revised &quot;Effective Date.&quot;
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">8. Contact Us</h3>
            <p className="mb-4 text-indigo-50">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email: devcenter.in@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Website: tools.devcenter.in</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-slate-600">
          <p>© {new Date().getFullYear()} Captify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}