import { WhatsappIcon } from "@/components/layout/whatsapp-icon"
import { HeroSection } from "@/components/sections/hero-section"
import { Testimonials } from "@/components/sections/testimonials"
import { AboutUs } from "@/components/sections/about-us"
import { FeaturedDestinations } from "@/components/sections/featured-destinations"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeroSection />
            <FeaturedDestinations />
            <AboutUs />
            <Testimonials />
            <ContactSection />

            {/* WhatsApp Floating Button */}
            <WhatsappIcon/>
        </main>
    )
}

