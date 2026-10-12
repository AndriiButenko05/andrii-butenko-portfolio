"use client";

import ProfileCard from "./ProfileCard";

export default function AboutProfileCard() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ProfileCard
      name="Andrii Butenko"
      title="Frontend Developer"
      handle="AndriiButenko05"
      status="Open to remote"
      contactText="Contact"
      avatarUrl="/images/profile-avatar.webp"
      avatarSrcSet="/images/profile-avatar-360.webp 360w, /images/profile-avatar-540.webp 540w, /images/profile-avatar.webp 720w"
      avatarSizes="(min-width: 1024px) 416px, (min-width: 768px) 376px, 316px"
      iconUrl="/images/ab-pattern.png"
      holo={0.8}
      glare={0.5}
      tiltStrength={12}
      parallax={8}
      radius={16}
      enableTilt
      intro
      showUserInfo
      enableMobileTilt={false}
      theme="dark"
      onContactClick={scrollToContact}
    />
  );
}
