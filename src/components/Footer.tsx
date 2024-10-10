import Link from 'next/link';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="space-y-4 md:col-span-3">
          <Link href="/" className="text-2xl font-bold text-custom-purple">
            Synnestra
          </Link>
          <p className="text-sm text-gray-600 max-w-xs">
            IT Consultation gives you the assurety and trust you need to create a truly professional website.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Github size={20} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-custom-purple mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {['About', 'Features', 'Works', 'Career'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-custom-purple">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-custom-purple mb-4">HELP</h3>
          <ul className="space-y-2">
            {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-custom-purple">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-custom-purple mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-custom-purple">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-custom-black-light">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by Synnestra
        </p>
      </div>
    </footer>
  );
}