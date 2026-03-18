import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Socials = () => {
  return (
    <div
      className="
        flex items-center justify-center space-x-6
        bg-white/10 backdrop-blur-md
        rounded-full px-8 py-3
        shadow-lg border border-white/20
        max-w-max
      "
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    >
      {[
        { href: 'https://instagram.com', label: 'Instagram', icon: <FaInstagram /> },
        { href: 'https://twitter.com', label: 'Twitter', icon: <FaTwitter /> },
        { href: 'https://www.tiktok.com', label: 'TikTok', icon: <FaTiktok /> },
        { href: 'https://facebook.com', label: 'Facebook', icon: <FaFacebookF /> },
      ].map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            inline-block
            px-1/2 rounded-full
            text-white text-2xl
            transition-transform transition-colors duration-300 ease-out
            hover:scale-110
            hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-white/60
            shadow-md
            hover:shadow-lg
          "
          style={{ willChange: 'transform, background-color, color, box-shadow' }}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;