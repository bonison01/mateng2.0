import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import { poppinsFont } from "../../_components/quick-link-section";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PhoneButton } from "../phone-button";

export function ContactsMain() {
  const phone = process.env.PHONE_NUMBER || "XXXXXXXXXX";
  const whatsapp = process.env.WHATSAPP_NUMBER || "XXXXXXXXXX";
  const email = process.env.CONTACT_EMAIL || "johndoe@example.com";

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <div className="font-extrabold text-2xl sm:text-4xl">CONTACT US</div>
      <div className="font-semibold text-base sm:text-lg w-[70%]">
        For questions, technical assistance, or collaboration opportunities via
        the contact information provided
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 pt-2 sm:pt-10">
        <a
          className=""
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/91${whatsapp}`}
        >
          <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
        </a>
        <Button
          className="rounded-xl w-52 font-semibold text-base h-12 sm:hidden"
          asChild
        >
          <a
            className={cn("", poppinsFont.className)}
            href={`tel:${phone}`}
            aria-label="contact"
          >
            <Phone className="h-6 w-6 inline mr-4" />
            Contact
          </a>
        </Button>
        <PhoneButton phone={phone}/>
      </div>
      <a href={`mailto:${email}`}>
        <Mail className="h-6 w-6 inline mr-2" />
        {email}
      </a>
    </div>
  );
}
