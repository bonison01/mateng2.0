"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { toast } from "sonner";

export function PhoneButton({ phone }: { phone: string }) {
  return (
    <Button
      className="rounded-xl w-52 font-semibold text-base h-12 hidden sm:inline-block"
      onClick={() => {
        navigator.clipboard
          .writeText(phone)
          .then(() => toast.success("Phone number copied to clipboard."));
      }}
    >
      <Phone className="h-6 w-6 inline mr-4" />
      Contact
    </Button>
  );
}
