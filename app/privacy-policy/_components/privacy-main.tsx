import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";

export function PrivacyMain() {
  return (
    <div
      className={cn(
        "pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    >
      <div className="w-[80%] sm:w-[70%] flex flex-col items-start font-light text-sm sm:text-base space-y-2">
        <h4 className="font-semibold text-lg">Privacy Policy</h4>
        <p>
          We at Mateng Group and our affiliates (hereinafter referred to as
          &quot;Mateng&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) consider customer trust as our top priority and take
          the protection of your personal information very seriously. We want
          you to feel safe using our products, services and solutions
          (&quot;Services&quot;). This Privacy Policy informs you of the way in
          which we collect, use, transfer, and store your personal information
          when you use our Services, as well as your rights in relation to this
          data.
        </p>
        <p>
          Please read this Privacy Policy carefully prior to accessing or
          availing our Services.
        </p>
        <div className="space-y-0">
          <p>
            While using our Services, we may ask you to provide us with certain
            personally identifiable information (also known as PII or Personal
            Information) that can be used to contact or identify you. Personally
            Identifiable Information may include, but is not limited to:
          </p>
          <p>Email address</p>
          <p>First name and Last name</p>
          <p>Phone number</p>
          <p>Address, State, Province, ZIP/Postal code, City</p>
          <p>KYC Documents</p>
          <p>Geographical Location</p>
          <p>Product Price</p>
        </div>
        <p>
          If you provide us any Personal Information of another Data Subject,
          you must ensure that you are authorised to do so and that such person
          is informed about this Privacy Policy. You can choose not to provide
          any Personal Information that we may request of you, but, in general,
          the Personal Information we request is required in order to provide
          you with access to and use of the Services, and the lack of such
          information may prevent us from doing so and impact the service
          capability and certain features of the SErvicess. We may ask you to
          provide certain additional information about yourself on a case to
          case basis in relation to our Services. It is clarified that any data
          which does not reveal your specific identity, does not relate to an
          identified or identifiable individual, information that is publicly
          available, information about software and hardware usage, information
          in relation to products you purchase or who you purchase them from, or
          any anonymised or aggregated data (&quot;Other Information&quot;) is not
          considered as PII or Personal Information.
        </p>
        <p>
          Our Services are not aimed at children (under the age of 18) and do
          not provide information specifically targeting children. If you are
          under 18 you may use our website and our Services only with the
          involvement of a parent or legal guardian. However, if you have
          visited our website or used our Services, we may store your details as
          set out in this Privacy Policy.
        </p>

        <h4 className="font-semibold pt-4">Changes to this Privacy Policy</h4>
        <p>
          We may update Mateng&apos;s Privacy Policy from time to time. The
          revised and most current version of policy will be updated and posted
          on the website directly. You are advised to review to review this
          Privacy Policy periodically for any changes. Changes to this Privacy
          Policy are effective when they are posted on this page.
        </p>

        <h4 className="font-semibold pt-4">Your Consent</h4>
        <p>
          By using our website, applications, or our Services, you consent to
          our Privacy Policy and the Cookie Policy. A link to both our policies
          will be provided in the footer of our website or application.You will
          also be asked to review and consent to our Privacy Policy and Cookie
          Policy when you create an account with us.
        </p>

        <h4 className="font-semibold pt-4">Contact Us</h4>
        <p>
          At Mateng, we have a dedicated Privacy Officer to address any concerns
          or questions you might have about the use of your data or generally in
          relation to this Privacy Policy. You can always reach out to us at
          admin@mateng.co.in with your grievances or questions. You can exercise
          your rights in accordance with the applicable data protection law.
        </p>

        <p>
          Please note that admin@mateng.co.in is solely for any concerns you
          might have in relation to this Privacy Policy or the use of your data
          by Mateng Group.
        </p>
      </div>
    </div>
  );
}
