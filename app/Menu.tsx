"use client";

import StaggeredMenu from "@/components/StaggeredMenu";

export default function Menu() {
  const menuItems = [
    { label: "About", ariaLabel: "Learn about me", link: "about" },
    { label: "Projects", ariaLabel: "Recent projects", link: "projects" },
    // { label: "Services", ariaLabel: "View our services", link: "/services" },
    // { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const socialItems = [
    { label: "Instagram", link: "https://twitter.com" },
    {
      label: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100006159373532",
    },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/stefan-seliger" },
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems.map((item) => ({
        ...item,
        onClick: () => handleScroll(item.link),
      }))}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#7C6A0A"
      openMenuButtonColor="#7C6A0A"
      changeMenuColorOnOpen={true}
      colors={["#7C6A0A", "#BABD8D"]}
      logoUrl={undefined}
      accentColor="#7C6A0A"
      isFixed={true}
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
}
