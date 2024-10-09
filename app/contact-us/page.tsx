import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { ContactsMain } from "./_components/contacts-main";

export default function ContactsPage(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
        <ContactsMain /> 
        <QuickLink currentPage="contact-us"/>
        <Footer />
      </main>
    )
}