import { WhatsappIcon } from "@/components/whatsapp-icon"
import { HeroSection } from "@/components/hero-section"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { Testimonials } from "@/components/testimonials"
import { AboutUs } from "@/components/about-us"
import { ContactSection } from "@/components/contact-section"

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

