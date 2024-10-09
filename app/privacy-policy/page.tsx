import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { PrivacyMain } from "./_components/privacy-main";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <PrivacyMain />
      <QuickLink />
      <Footer />
    </div>
  );
}
