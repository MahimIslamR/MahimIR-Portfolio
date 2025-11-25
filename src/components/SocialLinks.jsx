import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

// Custom WhatsApp Business icon: green background, white phone icon
const WhatsappIcon = ({ className, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* WhatsApp green background */}
    <circle cx="224" cy="224" r="224" fill="#25D366" />
    {/* White phone icon inside */}
    <path
      d="M331.6 261.4c-4.4-2.2-25.8-12.7-29.8-14.1-4-1.3-6.9-2.2-9.8 2.2-2.9 4.4-11.3 14.1-13.9 17-2.6 2.9-5.2 3.3-9.6 1.1-4.4-2.2-18.7-6.9-35.6-22-13.1-11.6-21.9-25.9-24.5-30.3-2.6-4.4-.3-6.8 1.9-9 1.9-1.9 4.4-5.2 6.6-7.8 2.2-2.6 2.9-4.4 4.4-7.4 1.5-2.9.7-5.5-.3-7.8-1-2.2-9.8-23.7-13.4-32.6-3.5-8.7-7.1-7.5-9.8-7.6-2.6-.1-5.7-.1-8.8-.1-3.1 0-8.1 1.1-12.3 5.5-4.1 4.4-15.6 15.2-15.6 37.1s16 43.1 18.3 46.1c2.2 3 31.6 48.2 76.7 67.6 10.7 4.6 19 7.4 25.5 9.5 10.7 3.5 20.5 3 28.3 1.8 8.7-1.3 25.8-10.5 29.4-20.6 3.5-10.1 3.5-18.7 2.5-20.6-1-1.9-4-2.9-8.4-5.1z"
      fill="#FFFFFF"
    />
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "www.linkedin.com/in/mahim-ir",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@Mahim-IR_",
    icon: Instagram,
    url: "https://www.instagram.com/mahim.islam.r?igsh=MWdzaDhmdXg0eDZsYw==",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "Whatsapp-Business",
    displayName: "Whatsapp",
    subText: "@Mahim Islam",
    icon: WhatsappIcon, // ← updated with WhatsApp green + white phone
    url: "https://wa.me/8801741010147",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Mahim-IR",
    icon: Github,
    url: "https://github.com/MahimIslamR",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Twitter",
    displayName: "X",
    subText: "@Mahim Islam Roman",
    icon: ({ className, ...props }) => (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <title>X</title>
        <rect width="24" height="24" fill="#000000" />
        <path
          d="M18.244 2H21.5l-7.73 8.823L23 22h-6.113l-4.78-6.234L6.593 22H3.333l8.26-9.424L1 2h6.205l4.315 5.676L18.244 2zM17.06 20h1.64L7.05 4h-1.6L17.06 20z"
          fill="#FFFFFF"
        />
      </svg>
    ),
    url: "https://x.com/MahimIslamR?t=cAAPqvdb0lNnEItRrN3_Mw&s=08",
    color: "black",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]"
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, whatsappBusiness, github, twitter] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>
      <div className="flex flex-col gap-4">
        {/* LinkedIn */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${linkedIn.gradient}`} />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: linkedIn.color }} />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{ color: linkedIn.color }} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>
          <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1" />
        </a>

        {/* Instagram & WhatsApp Business */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[instagram, whatsappBusiness].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110" style={{ color: link.color }} />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">{link.displayName}</span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">{link.subText}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
            </a>
          ))}
        </div>

        {/* GitHub & Twitter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[github, twitter].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110" style={{ color: link.color }} />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">{link.displayName}</span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">{link.subText}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
