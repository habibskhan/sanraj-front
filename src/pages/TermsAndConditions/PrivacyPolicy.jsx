import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import "./termsandconditions.scss";
import { useWindowSize } from "react-use";
import { images } from "../../images";
import { Link } from "react-router-dom";
import { contactusUrl } from "../../components/helpers/constant-words";

const PrivacyPolicy = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CommonBanner
        title={"Privacy Policy"}
        banner={
          width > 600
            ? images.privacypolicybanner.image
            : images.privacypolicybannermb.image
        }
        linkText1={"Privacy Policy"}
      />

      <section className="my_container">
        <div className="terms">
          {/* <h2 className="title">PRIVACY POLICY</h2> */}
          <div className="para_wrapper">
            {/* <p>Last updated: September 23, 2024</p> */}
            <p className="section_desc20">
              Welcome to the website of SanRaj Group (“we,” “us,” “our” or
              “Company”). By accessing or using our website, you agree to comply
              with and be bound by the following terms and conditions (“Terms”).
              Please read these Terms carefully before using our Service.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              Interpretation and Definitions
            </h2>
            <h3 className="sub_heading">Interpretation</h3>
            <p className="section_desc20">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3 className="sub_heading">Definitions</h3>
            <p className="section_desc20">
              For the purposes of this Privacy Policy:
            </p>
            <p className="section_desc20">
              <span>Account</span> means a unique account created for You to
              access our Service or parts of our Service.
            </p>
            <p className="section_desc20">
              <span>Affiliate</span> means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority.
            </p>
            <p className="section_desc20">
              <span>Company</span> (referred to as either "the Company", "We",
              "Us" or "Our" in this Agreement) refers to SanRaj Group, SanRaj
              Corporate Park, 4th Dimension, 4th Floor, Mind Space, Malad
              (west), Mumbai, 400064.
            </p>
            <p className="section_desc20">
              <span>Cookies</span> are small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing the details of Your browsing history on that website
              among its many uses.
            </p>
            <p className="section_desc20">
              <span>Country</span> refers to: Maharashtra, India
            </p>
            <p className="section_desc20">
              <span>Device</span> means any device that can access the Service
              such as a computer, a cellphone or a digital tablet.
            </p>
            <p className="section_desc20">
              <span>Personal</span> Data is any information that relates to an
              identified or identifiable individual.
            </p>
            <p className="section_desc20">
              <span>Service</span> refers to the Website.
            </p>
            <p className="section_desc20">
              <span>Service</span> Provider means any natural or legal person
              who processes the data on behalf of the Company. It refers to
              third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used.
            </p>
            <p className="section_desc20">
              <span>Third-party Social Media Service</span> refers to any
              website or any social network website through which a User can log
              in or create an account to use the Service.
            </p>
            <p className="section_desc20">
              <span>Usage Data</span> refers to data collected automatically,
              either generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </p>
            <p className="section_desc20">
              <span>Website</span> refers to SanRaj Group , accessible from{" "}
              <Link to="/">https://sanraj.com/</Link>
            </p>
            <p className="section_desc20">
              <span>You</span> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              Collecting and Using Your Personal Data
            </h2>
            <h3 className="sub_heading">Types of Data Collected</h3>
            <h3 className="sub_heading">Personal Data</h3>
            <p className="section_desc20">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>

            <p className="section_desc20">Email address</p>
            <p className="section_desc20">First name and last name</p>
            <p className="section_desc20">Phone number</p>
            <p className="section_desc20">Usage Data</p>

            <h3 className="sub_heading">Usage Data</h3>
            <p className="section_desc20">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="section_desc20">
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p className="section_desc20">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p className="section_desc20">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
            <h3 className="sub_heading">Legal Basis for Processing</h3>
            <p className="section_desc20">
              We process your personal data based on your consent, legitimate
              business interests, the performance of a contract, compliance with
              legal obligations, or other lawful grounds in accordance with
              applicable data protection laws.
            </p>

            <h3 className="sub_heading">
              Information from Third-Party Social Media Services
            </h3>
            <p className="section_desc20">
              The Company allows You to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </p>
            <ul className="list_wrapper">
              <li>Google</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
            <p className="section_desc20">
              If You decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal data
              that is already associated with Your Third-Party Social Media
              Service's account, such as Your name, Your email address, Your
              activities or Your contact list associated with that account.
            </p>
            <p className="section_desc20">
              You may also have the option of sharing additional information
              with the Company through Your Third-Party Social Media Service's
              account. If You choose to provide such information and Personal
              Data, during registration or otherwise, You are giving the Company
              permission to use, share, and store it in a manner consistent with
              this Privacy Policy.
            </p>

            <h3 className="sub_heading">Tracking Technologies and Cookies</h3>
            <p className="section_desc20">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </p>
            <ul className="list_wrapper">
              <li>
                <span>Cookies or Browser Cookies.</span> A cookie is a small
                file placed on Your Device. You can instruct Your browser to
                refuse all Cookies or to indicate when a Cookie is being sent.
                However, if You do not accept Cookies, You may not be able to
                use some parts of our Service. Unless you have adjusted Your
                browser setting so that it will refuse Cookies, our Service may
                use Cookies.
              </li>
              <li>
                <span>Web Beacons.</span> Certain sections of our Service and
                our emails may contain small electronic files known as web
                beacons (also referred to as clear gifs, pixel tags, and
                single-pixel gifs) that permit the Company, for example, to
                count users who have visited those pages or opened an email and
                for other related website statistics (for example, recording the
                popularity of a certain section and verifying system and server
                integrity).
              </li>
            </ul>

            <p className="section_desc20">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser. You can learn more about cookies on{" "}
              <a
                href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                target="_blank"
                rel="noreferrer"
              >
                TermsFeed website
              </a>{" "}
              article.
            </p>
            <p className="section_desc20">
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>

            <h3 className="sub_heading">Necessary / Essential Cookies</h3>
            <p className="section_desc20">Type: Session Cookies</p>
            <p className="section_desc20">Administered by: Us</p>
            <p className="section_desc20">
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </p>

            <h3 className="sub_heading">
              Cookies Policy / Notice Acceptance Cookies
            </h3>
            <p className="section_desc20">Type: Persistent Cookies</p>
            <p className="section_desc20">Administered by: Us</p>
            <p className="section_desc20">
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </p>

            <h3 className="sub_heading">Functionality Cookies</h3>
            <p className="section_desc20">Type: Persistent Cookies</p>
            <p className="section_desc20">Administered by: Us</p>
            <p className="section_desc20">
              <span>Purpose:</span> These Cookies allow us to remember choices
              You make when You use the Website, such as remembering your login
              details or language preference. The purpose of these Cookies is to
              provide You with a more personal experience and to avoid You
              having to re-enter your preferences every time You use the
              Website.
            </p>
            <p className="section_desc20">
              <span>Cookie Consent:</span> By using our website, you consent to
              the use of cookies as described in this policy. You may manage or
              withdraw your consent to cookies by adjusting your browser
              settings or visiting the cookie preferences section on our website
            </p>
            <p className="section_desc20">
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>

            <h3 className="sub_heading">Use of Your Personal Data</h3>
            <p className="section_desc20">
              The Company may use Personal Data for the following purposes:
            </p>
            <p className="section_desc20">
              <span>To provide and maintain our Service,</span> including to
              monitor the usage of our Service.
            </p>
            <p className="section_desc20">
              <span>To manage Your Account:</span> to manage Your registration
              as a user of the Service. The Personal Data You provide can give
              You access to different functionalities of the Service that are
              available to You as a registered user.
            </p>
            <p className="section_desc20">
              <span>For the performance of a contract:</span>
              the development, compliance and undertaking of the purchase
              contract for the products, item
            </p>
            <p className="section_desc20">
              <span>To contact You:</span>
              To contact You by email, telephone calls, SMS, or other equivalent
              forms of electronic communication, such as a mobile application's
              push notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </p>
            <p className="section_desc20">
              <span>To provide You</span>
              with news, special offers and general information about other
              goods, services and events which we offer that are similar to
              those that you have already purchased or enquired about unless You
              have opted not to receive such information.
            </p>
            <p className="section_desc20">
              <span>To manage Your requests:</span>
              To attend and manage Your requests to Us.
            </p>
            <p className="section_desc20">
              <span></span>
            </p>
            <p className="section_desc20">
              <span>For business transfers:</span>
              We may use Your information to evaluate or conduct a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all of Our assets, whether as a going
              concern or as part of bankruptcy, liquidation, or similar
              proceeding, in which Personal Data held by Us about our Service
              users is among the assets transferred.
            </p>
            <p className="section_desc20">
              <span>For the performance of legal obligations:</span>
              To comply with legal and regulatory requirements based on your
              jurisdiction, including responding to government or regulatory
              authorities as required.
            </p>
            <p className="section_desc20">
              <span>For other purposes:</span>
              We may use Your information for other purposes, such as data
              analysis, identifying usage trends, determining the effectiveness
              of our promotional campaigns and to evaluate and improve our
              Service, products, services, marketing and your experience.
            </p>

            <ul className="list_wrapper">
              <li>
                <span>With Service Providers:</span>We may share Your personal
                information with Service Providers to monitor and analyze the
                use of our Service, to contact You.
              </li>
              <li>
                <span>For business transfers</span>
                We may share or transfer Your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our
                business to another compan
              </li>
              <li>
                <span>With Affiliates:</span>
                We may share Your information with Our affiliates, in which case
                we will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </li>
              <li>
                <span>With business partners</span>
                We may share Your information with Our business partners to
                offer You certain products, services or promotions.
              </li>
              <li>
                <span>With other users:</span>
                when You share personal information or otherwise interact in the
                public areas with other users, such information may be viewed by
                all users and may be publicly distributed outside. If You
                interact with other users or register through a Third-Party
                Social Media Service, Your contacts on the Third-Party Social
                Media Service may see Your name, profile, pictures and
                description of Your activity. Similarly, other users will be
                able to view descriptions of Your activity, communicate with You
                and view Your profile.
              </li>
              <li>
                <span>With Your consent:</span>
                We may disclose Your personal information for any other purpose
                with Your consent.
              </li>
              <li>
                <span>International Data Transfers:</span>
                If we transfer your personal data outside of your jurisdiction,
                we ensure that appropriate safeguards are in place, such as
                <span>
                  Standard Contractual Clauses (SCCs), Binding Corporate Rules
                  (BCRs),
                </span>{" "}
                or other legally approved methods to protect your data.
              </li>
            </ul>

            <h3 className="sub_heading">Data Subject Rights</h3>
            <p className="section_desc20">You have the right to:</p>
            <ul className="list_wrapper">
              <li>Access and receive a copy of your personal data.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data.</li>
              <li>
                Object to or restrict the processing of your personal data.
              </li>
              <li>
                Request data portability, i.e., transfer of your personal data
                to another entity.
              </li>
              <li>
                Withdraw consent to the processing of your personal data at any
                time.
              </li>
            </ul>

            <h3 className="sub_heading">Retention of Your Personal Data</h3>
            <p className="section_desc20">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p className="section_desc20">
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
            <p className="section_desc20">
              We implement{" "}
              <span>
                technical and organizational security measures, including
                encryption, access controls, and regular security assessments,
              </span>{" "}
              to protect your personal data from unauthorized access,
              disclosure, alteration, or destruction
            </p>

            <h3 className="sub_heading">Transfer of Your Personal Data</h3>
            <p className="section_desc20">
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p className="section_desc20">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p className="section_desc20">
              We will ensure that adequate safeguards are in place before any
              such transfer takes place, including compliance with international
              frameworks such as the GDPR, SCCs, or BCRs, to ensure the lawful
              and secure transmission of personal data across borders.{" "}
            </p>

            <h3 className="sub_heading">Data Breach Notification </h3>
            <p className="section_desc20">
              In the event of a data breach that compromises your personal data,
              we will notify you and the relevant regulatory authority in
              accordance with applicable legal requirements, including the
              Digital Personal Data Protection Act, 2023and General Data
              Protection Regulation (GDPR). We will also take steps to mitigate
              the impact of the breach and prevent future incidents.
            </p>

            <h3 className="sub_heading">Delete Your Personal Data</h3>
            <p className="section_desc20">
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </p>
            <p className="section_desc20">
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </p>
            <p className="section_desc20">
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </p>
            <p className="section_desc20">
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Disclosure of Your Personal Data</h2>
            <h3 className="sub_heading">Business Transactions</h3>
            <p className="section_desc20">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>

            <h3 className="sub_heading">Law enforcement</h3>
            <p className="section_desc20">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>

            <h3 className="sub_heading">Other legal requirements</h3>
            <p className="section_desc20">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>

            <ul className="list_wrapper">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>

            <h3 className="sub_heading">Security of Your Personal Data</h3>
            <p className="section_desc20">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>

            <h3 className="sub_heading">Children's Privacy</h3>
            <p className="section_desc20">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p className="section_desc20">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>

            <h3 className="sub_heading">Links to Other Websites</h3>
            <p className="section_desc20">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p className="section_desc20">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>

            <h3 className="sub_heading">Changes to this Privacy Policy</h3>
            <p className="section_desc20">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="section_desc20">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="section_desc20">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h3 className="sub_heading">Contact Us</h3>
            <p className="section_desc20">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <p className="section_desc20">
              By email: <a href="mailto:info@sanraj.co.in">info@sanraj.co.in</a>
            </p>
            <p className="section_desc20">
              By visiting this page on our website:{" "}
              <Link to={contactusUrl}>https://sanraj.com/contact/</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
