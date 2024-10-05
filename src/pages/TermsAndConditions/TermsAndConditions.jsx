import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import "./termsandconditions.scss";
import { useWindowSize } from "react-use";
import { images } from "../../images";
import { Link } from "react-router-dom";
import { contactusUrl } from "../../components/helpers/constant-words";

const TermsAndConditions = () => {
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
        title={"Terms & Conditions"}
        banner={
          width > 600 ? images.termbanner.image : images.termbannermb.image
        }
        linkText1={"Terms & Conditions"}
      />

      <section className="my_container">
        <div className="terms">
          {/* <h2 className="title">TERMS AND CONDITIONS</h2> */}
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
              For the purposes of these Terms and Conditions:
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
              <span>Device</span> means any device that can access the Service
              such as a computer, a cellphone or a digital tablet.
            </p>
            <p className="section_desc20">
              <span>Service</span> refers to the Website.
            </p>
            <p className="section_desc20">
              <span>Terms and Conditions</span> (also referred as "Terms") mean
              these Terms and Conditions that form the entire agreement between
              You and the Company regarding the use of the Service.
            </p>
            <p className="section_desc20">
              <span>Third Party Content</span> means any services or content
              (including data, information, products or services) provided by a
              third-party that may be displayed, included or made available by
              the Service.
            </p>
            <p className="section_desc20">
              <span>Website </span> refers to SanRaj Group , accessible from{" "}
              <Link to="/">https://sanraj.com/</Link>
            </p>
            <p className="section_desc20">
              <span>You</span> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </p>

            <h3 className="sub_heading"></h3>
            <p className="section_desc20"></p>

            <h3 className="sub_heading"></h3>
            <p className="section_desc20"></p>

            <h3 className="sub_heading"></h3>
            <p className="section_desc20"></p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Acknowledgment</h2>
            <p className="section_desc20">
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service.
            </p>
            <p className="section_desc20">
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </p>
            <p className="section_desc20">
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </p>
            <p className="section_desc20">
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
            <p className="section_desc20">
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Website User Restrictions</h2>
            <p className="section_desc20">
              All information and materials on this Website, including but not
              limited to, text, trademarks, logos, graphics, and images (the
              "Materials"), are the copyrighted works and other forms of
              intellectual property of SanRaj Group or third parties who have
              authorized use of the Materials on this Website. Unless otherwise
              provided in respect to specific areas or Materials on the Website,
              SanRaj Group grants you only the limited license to display the
              Materials on your personal computer or personal wireless device,
              and to copy and download such Materials, provided that: (1) any
              copyright, trademark or other notice appearing on such Materials
              is also retained by, displayed, copied, or downloaded as part of
              the Materials, and is not removed or obscured, and (2) such
              display, copy, or download is used solely for your personal
              information. Such Materials may not be distributed, transmitted,
              displayed, or broadcast in any manner or for any purpose. You
              acknowledge and agree that you have no right to nor will you
              modify, edit, alter, or enhance any of the Materials in any
              manner. This limited right terminates automatically, without
              notice to you, if you breach any of the Terms. Upon termination of
              this limited right of display, you agrees to immediately erase or
              otherwise destroy any downloaded and printed Materials. Except as
              expressly stated herein, you acknowledge that you have no legal
              right, title, or interest in or to the Materials other than a
              limited right of display.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Third Party Content</h2>
            <p className="section_desc20">
              SanRaj Group has no specific prior review process or editorial
              control over Third Party Content. Any opinions, advice,
              statements, services, offers, or other information or content
              expressed or made available by third parties, including
              information providers, members or any other user of this Website,
              are those of the respective parties and not necessarily those of
              SanRaj Group. Neither SanRaj Group nor any third-party provider of
              information guarantees the accuracy, completeness, or usefulness
              of any Third Party Content, nor its merchantability or fitness for
              any particular purpose.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              Proprietary Materials Agreement
            </h2>
            <p className="section_desc20">
              You understand that all the Materials provided on this Website are
              the proprietary property of SanRaj Group and are protected by
              copyright, trade secret, and other applicable laws in the
              respective jurisdiction.
            </p>
            <p className="section_desc20">
              You have the limited right to display the Materials only on your
              personal computer, and to copy and download the Materials provided
              that: (1) any copyright and trademark notices appearing on such
              Materials are also displayed, copied or downloaded as part of the
              Materials, and are not removed, moved, or obscured, and (2) such
              display, copy, or download is solely for your personal
              informational use. This limited right to access, display, and use
              of the Website terminates automatically, without notice to you, if
              you breach any of these Terms.
            </p>
            <p className="section_desc20">
              You acknowledge and agree that you have no right to modify, edit,
              alter or enhance any of the Materials in any manner. The Materials
              may not be distributed, transmitted, or broadcast in any manner,
              for any commercial purpose unless expressly authorized to do so by
              SanRaj Group, in advance, and in writing.
            </p>
            <p className="section_desc20">
              You agree not to use the Materials in any way that would
              compromise the proprietary nature of the Materials. Without
              limiting all of the foregoing, you agree not to deliver the
              Materials themselves, either reproduced or modified, or anything
              derived from the Materials, either orally or in writing, as part
              of any seminar, training program, workshop, consulting, or similar
              business activity which you make available to your clients or to
              others, except with the prior written permission of SanRaj Group.
            </p>
            <p className="section_desc20">
              Except as expressly stated herein, you acknowledge that you have
              no right, title, or interest of any kind on any legal basis in or
              to the Materials.
            </p>
            <p className="section_desc20">
              Upon termination of this limited license or usage, you agree to
              immediately destroy any downloaded and/or printed Materials that
              you may have in your possession or control.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Links to Other Websites</h2>
            <p className="section_desc20">
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by the Company.
            </p>
            <p className="section_desc20">
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any Third
              Party Content. You further acknowledge and agree that the Company
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with the use of or reliance on any such content, goods
              or services available on or through any such web sites or
              services. We strongly advise You to read the terms and conditions
              and privacy policies of any third-party web sites or services that
              You visit.{" "}
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Termination</h2>
            <p className="section_desc20">
              Your access to Website will be subject to SanRaj Group’s
              authorization to access the Website. SanRaj Group reserves the
              right to terminate Your access to the Website at any time without
              notice, for any reason (including, but not limited to, if you
              violate these Terms) or for no reason. While SanRaj Group’s
              preferred course of action is to advise you of your inappropriate
              behavior and recommend any necessary corrective action, SanRaj
              Group does not represent that it will nor is it required to either
              actively monitor such behavior or to provide such notice to you.
              SanRaj Group’s right to terminate Your access is in addition to
              all other legal or equitable remedies available to SanRaj Group
              hereunder, which rights are fully and expressly reserved by SanRaj
              Group. Upon termination of this Agreement for any reason, You
              shall cease to use or further access any Website’s content or
              services and be liable for any unauthorized attempts to do so via
              any means.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Limitation of Liability</h2>
            <p className="section_desc20">
              Notwithstanding any damages that You might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and Your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by You
              through the Service or 100 USD if You haven't purchased anything
              through the Service.
            </p>
            <p className="section_desc20">
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever
              (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way
              related to the use of or inability to use the Service, third-party
              software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if
              the Company or any supplier has been advised of the possibility of
              such damages and even if the remedy fails of its essential
              purpose.
            </p>
            <p className="section_desc20">
              Some states do not allow the exclusion of implied warranties or
              limitation of liability for incidental or consequential damages,
              which means that some of the above limitations may not apply. In
              these states, each party's liability will be limited to the
              greatest extent permitted by law.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              "AS IS" and "AS AVAILABLE" Disclaimer
            </h2>
            <p className="section_desc20">
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with
              all faults and defects without warranty of any kind. To the
              maximum extent permitted under applicable law, the Company, on its
              own behalf and on behalf of its Affiliates and its and their
              respective licensors and service providers, expressly disclaims
              all warranties, whether express, implied, statutory or otherwise,
              with respect to the Service, including all implied warranties of
              merchantability, fitness for a particular purpose, title and
              non-infringement, and warranties that may arise out of course of
              dealing, course of performance, usage or trade practice. Without
              limitation to the foregoing, the Company provides no warranty or
              undertaking, and makes no representation of any kind that the
              Service will meet Your requirements, achieve any intended results,
              be compatible or work with any other software, applications,
              systems or services, operate without interruption, meet any
              performance or reliability standards or be error free or that any
              errors or defects can or will be corrected.
            </p>
            <p className="section_desc20">
              Without limiting the foregoing, neither the Company nor any of the
              company's provider makes any representation or warranty of any
              kind, express or implied: (i) as to the operation or availability
              of the Service, or the information, content, and materials or
              products included thereon; (ii) that the Service will be
              uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of the Company are free
              of viruses, scripts, trojan horses, worms, malware, timebombs or
              other harmful components.
            </p>
            <p className="section_desc20">
              Some jurisdictions do not allow the exclusion of certain types of
              warranties or limitations on applicable statutory rights of a
              consumer, so some or all of the above exclusions and limitations
              may not apply to You. But in such a case the exclusions and
              limitations set forth in this section shall be applied to the
              greatest extent enforceable under applicable law.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Governing Law</h2>
            <p className="section_desc20">
              The parties agree that any controversy or claim arising out of or
              relating to this Terms, or the breach thereof, shall be governed
              by and interpreted in accordance with laws of India and the
              parties submit to the exclusive jurisdiction of the courts of
              Mumbai.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">For European Union (EU) Users</h2>
            <h3 className="sub_heading"></h3>
            <p className="section_desc20">
              If You are a European Union consumer, you will benefit from any
              mandatory provisions of the law of the country in which You are
              resident.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              United States Legal Compliance
            </h2>
            <p className="section_desc20">
              You represent and warrant that (i) You are not located in a
              country that is subject to the United States government embargo,
              or that has been designated by the United States government as a
              "terrorist supporting" country, and (ii) You are not listed on any
              United States government list of prohibited or restricted parties.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">No Agency or Partnership</h2>
            <p className="section_desc20">
              The parties are independent contractors. Neither party may direct
              or control the day-to-day activities of the other; neither party
              may create or assume any legal obligation on behalf of the other.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">No Third Party Beneficiaries</h2>
            <p className="section_desc20">
              You acknowledge and agree that this Agreement shall in no event be
              construed as a third party beneficiary contract, and that it is
              not intended for the benefit of any person or company whomsoever
              except the parties hereto.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Severability and Waiver</h2>
            <h3 className="sub_heading">Severability</h3>
            <p className="section_desc20">
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law and the remaining provisions will
              continue in full force and effect.
            </p>

            <h3 className="sub_heading">Waiver</h3>
            <p className="section_desc20">
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under these Terms shall not
              affect a party's ability to exercise such right or require such
              performance at any time thereafter nor shall the waiver of a
              breach constitute a waiver of any subsequent breach.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Assignment</h2>
            <p className="section_desc20">
              SanRaj Group may assign any or all of its rights and obligations
              hereunder to any party without the prior consent of or notice to
              You.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Translation Interpretation</h2>
            <p className="section_desc20">
              These Terms and Conditions may have been translated if We have
              made them available to You on our Service. You agree that the
              original English text shall prevail in the case of a dispute.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">
              Changes to These Terms and Conditions
            </h2>
            <p className="section_desc20">
              We reserve the right, at Our sole discretion, to modify or replace
              these Terms at any time. If a revision is material We will make
              reasonable efforts to provide at least 30 days' notice prior to
              any new terms taking effect. What constitutes a material change
              will be determined at Our sole discretion.
            </p>
            <p className="section_desc20">
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised terms. If
              You do not agree to the new terms, in whole or in part, please
              stop using the website and the Service.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Indemnities</h2>
            <p className="section_desc20">
              By using this Website, You agrees to indemnify and defend SanRaj
              Group and its subsidiaries, affiliates, directors, officers,
              consultants, and employees and hold them harmless from any and all
              claims and expenses, including attorney's fees, arising from Your
              misuse of this Website or Service.
            </p>
          </div>

          <div className="para_wrapper">
            <h2 className="section_heading32">Contact Us</h2>
            <p className="section_desc20">
              If you have any questions about these Terms and Conditions, You
              can contact us:
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

        {/* <p className="section_desc20">
              <span></span>
            </p> */}
        {/* <div className="para_wrapper">
          <h2 className="section_heading32"></h2>
          <h3 className="sub_heading"></h3>
          <p className="section_desc20"></p>
        </div> */}
        {/* <ul className="list_wrapper">
          <li></li>
        </ul> */}
      </section>
    </div>
  );
};

export default TermsAndConditions;
