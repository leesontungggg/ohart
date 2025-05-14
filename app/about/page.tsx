import Introduction from "@/components/introduction";
import PartnershipSection from "@/components/partnership-detail";
import SubscribeNewsletter from "@/components/subscribe";
import TeamSection from "@/components/team";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-20">
        <div className="relative h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1544967082-d9d25d867d66"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Introduction />
      <TeamSection />
      <PartnershipSection />
      <SubscribeNewsletter />
    </div>
  );
}
