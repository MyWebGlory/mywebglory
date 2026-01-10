import PageLayout from "@/components/PageLayout";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <PageLayout 
      title="Privacy & Legal" 
      description="Terms of service, privacy policy, and legal information for MyWebGlory services."
    >
      <div className="max-w-4xl space-y-12">
        
        {/* Company Information */}
        <section>
          <p className="text-muted-foreground mb-8">
            <strong>MyWebGlory</strong> is a registered DBA (Doing Business As) of <strong>ADB International LLC</strong>. 
            All services, contracts, and agreements are legally binding under ADB International LLC.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
        </section>

        <Separator />

        {/* Terms of Service */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By engaging MyWebGlory (a DBA of ADB International LLC) for any services, you ("Client") agree to be bound by these Terms of Service. 
                These terms constitute a legally binding agreement between you and ADB International LLC. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Services Provided</h3>
              <p className="text-muted-foreground mb-3">
                MyWebGlory provides event marketing, creative production, and related digital marketing services as outlined in individual 
                project proposals and contracts. The scope of work, deliverables, and timelines are defined in the project agreement 
                signed by both parties prior to commencement of work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Contracts & Agreements</h3>
              <p className="text-muted-foreground">
                All projects require a signed service agreement before work commences. This agreement will outline specific deliverables, 
                timelines, payment terms, and project scope. Non-Disclosure Agreements (NDAs) are available upon request and will be 
                executed when required for projects involving confidential or proprietary information.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Payment Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Payment Terms</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Payment Structure</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Initial Deposit:</strong> 50% of the total project fee is due upon signing of the service agreement</li>
                <li><strong>Final Payment:</strong> The remaining 50% is due no later than seven (7) calendar days before the event date or final delivery</li>
                <li>For non-event projects, final payment is due upon delivery of final assets unless otherwise specified in the agreement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Payment Method</h3>
              <p className="text-muted-foreground mb-3">
                All payments are processed exclusively via bank wire transfer or ACH deposit. We do not accept credit cards, checks, 
                or other payment methods unless explicitly agreed upon in writing.
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> Work on any project will only commence after the initial deposit has been received and 
                confirmed in our bank account. This policy ensures mutual commitment and allows us to allocate the necessary resources 
                to deliver exceptional results for your project.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Late Payments</h3>
              <p className="text-muted-foreground">
                Invoices not paid within the specified timeframe may result in project delays or suspension of services. 
                A late fee of 1.5% per month may be applied to overdue balances. MyWebGlory reserves the right to withhold 
                final deliverables until all outstanding payments are received.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. Refunds</h3>
              <p className="text-muted-foreground">
                Initial deposits are non-refundable as they secure our team's time and resources. In the event of project 
                cancellation by the Client, any work completed up to the cancellation date will be billed proportionally. 
                Refunds for the final payment may be considered on a case-by-case basis depending on project status.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Revision Policy */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Revision & Satisfaction Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Revision Period</h3>
              <p className="text-muted-foreground">
                Client satisfaction is our priority. Upon delivery of any milestone or final deliverables, the Client has 
                <strong> five (5) business days</strong> to review and request revisions. Revision requests must be submitted 
                in writing (email) with clear, specific feedback on the changes required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Revision Scope</h3>
              <p className="text-muted-foreground mb-3">
                Revisions within the original project scope are included as specified in your service agreement. Requests 
                that fall outside the original scope, require significant rework, or represent a change in creative direction 
                may be subject to additional fees, which will be communicated and approved before implementation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Approval & Sign-Off</h3>
              <p className="text-muted-foreground">
                If no revision requests are received within the five (5) business day review period, deliverables will be 
                considered approved and accepted. Written approval or sign-off from the Client constitutes final acceptance 
                of the deliverables.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Service Warranty</h3>
              <p className="text-muted-foreground">
                MyWebGlory strives to deliver high-quality work that meets the specifications outlined in the service agreement. 
                However, services are provided "as is" and we make no warranties, express or implied, regarding the results, 
                outcomes, or performance of marketing campaigns, event attendance, or business results derived from our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Limitation of Damages</h3>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, ADB International LLC (doing business as MyWebGlory) shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of 
                profits, revenue, data, or business opportunities, arising from or related to our services, regardless of the 
                theory of liability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Maximum Liability</h3>
              <p className="text-muted-foreground">
                In no event shall our total liability exceed the amount paid by the Client for the specific project giving rise 
                to the claim. This limitation applies to all claims, whether based on contract, tort, or any other legal theory.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Dispute Resolution */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dispute Resolution</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Good Faith Resolution</h3>
              <p className="text-muted-foreground">
                We believe in maintaining positive, professional relationships with all our clients. In the event of any 
                disagreement or dispute arising from our services, both parties agree to first attempt to resolve the matter 
                through good faith negotiation and open communication.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Mediation</h3>
              <p className="text-muted-foreground">
                If a dispute cannot be resolved through direct negotiation within thirty (30) days, both parties agree to 
                submit the dispute to non-binding mediation before pursuing any other remedies. The mediation shall be 
                conducted by a mutually agreed-upon mediator, with costs shared equally between parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Binding Arbitration</h3>
              <p className="text-muted-foreground">
                Any dispute that cannot be resolved through mediation shall be settled by binding arbitration in accordance 
                with the rules of the American Arbitration Association. The arbitration shall take place in the state where 
                ADB International LLC is registered, and the decision of the arbitrator shall be final and binding on both parties. 
                Both parties waive their right to a jury trial and to participate in class action lawsuits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. Governing Law</h3>
              <p className="text-muted-foreground">
                These terms and any disputes arising hereunder shall be governed by and construed in accordance with the 
                laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Intellectual Property</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Ownership of Deliverables</h3>
              <p className="text-muted-foreground">
                Upon receipt of full payment, the Client receives ownership rights to the final deliverables as specified in 
                the service agreement. MyWebGlory retains ownership of all preliminary concepts, drafts, and materials not 
                included in the final deliverables.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Portfolio Rights</h3>
              <p className="text-muted-foreground">
                MyWebGlory reserves the right to display completed work in our portfolio, website, social media, and marketing 
                materials for promotional purposes, unless otherwise agreed upon in writing or restricted by an NDA.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Third-Party Assets</h3>
              <p className="text-muted-foreground">
                Any third-party assets (stock images, fonts, music, etc.) used in deliverables are subject to their respective 
                license terms. The Client is responsible for ensuring compliance with such licenses for their intended use.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Privacy Policy */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground mb-3">
                We collect information you provide directly, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Contact information (name, email, phone, company name)</li>
                <li>Project details and requirements</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground mb-3">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide and improve our services</li>
                <li>Communicate about projects and deliverables</li>
                <li>Process payments and send invoices</li>
                <li>Send relevant updates and marketing communications (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Data Protection</h3>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. We do not sell, trade, or rent your personal 
                information to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. Data Retention</h3>
              <p className="text-muted-foreground">
                We retain your information for as long as necessary to fulfill the purposes outlined in this policy, comply 
                with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal information. To exercise these rights or for 
                any privacy-related inquiries, please contact us at the email address provided on our contact page.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Indemnification */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Indemnification</h2>
          
          <p className="text-muted-foreground">
            The Client agrees to indemnify, defend, and hold harmless ADB International LLC (doing business as MyWebGlory), 
            its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, 
            liabilities, costs, and expenses (including reasonable attorneys' fees) arising from or related to: (a) the Client's 
            use of our services; (b) any content, materials, or information provided by the Client; (c) the Client's violation 
            of these terms; or (d) the Client's violation of any third-party rights.
          </p>
        </section>

        <Separator />

        {/* Force Majeure */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Force Majeure</h2>
          
          <p className="text-muted-foreground">
            Neither party shall be liable for any failure or delay in performing their obligations under any agreement where 
            such failure or delay results from circumstances beyond their reasonable control, including but not limited to 
            acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, 
            floods, accidents, pandemic, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
          </p>
        </section>

        <Separator />

        {/* Modifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Modifications to Terms</h2>
          
          <p className="text-muted-foreground">
            MyWebGlory reserves the right to modify these terms at any time. Changes will be effective upon posting to this 
            page with an updated revision date. Continued use of our services after any modifications constitutes acceptance 
            of the revised terms. We encourage you to review this page periodically.
          </p>
        </section>

        <Separator />

        {/* Severability */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Severability</h2>
          
          <p className="text-muted-foreground">
            If any provision of these terms is found to be unenforceable or invalid by a court of competent jurisdiction, 
            that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
            shall remain in full force and effect.
          </p>
        </section>

        <Separator />

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <p className="text-muted-foreground mb-4">
            For any questions regarding these terms, our privacy practices, or our services, please contact us:
          </p>
          <div className="text-muted-foreground">
            <p><strong>MyWebGlory</strong></p>
            <p>A DBA of ADB International LLC</p>
            <p className="mt-2">Email: hello@mywebglory.com</p>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default Privacy;
