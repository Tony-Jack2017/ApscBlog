import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import ComContainer from "@/components/layout/base/ComContainer.tsx";

const ContactSection = () => {
  return (
    <SectionContainer isSticky={true} id="contact" className="contact-section">
      <ComContainer>
        <div className="title">
          GET IN TOUCH TO ME
          <p className="content">
            Send message to me
          </p>
        </div>
        <div className="contact-cotent">
          This is contact section
        </div>
        <div className="footer">
          <ComContainer className="maker text-center">
            MADE BY ❤ <span className="text-secondary">APSC BUILDER</span>
          </ComContainer>
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default ContactSection