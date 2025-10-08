import React from "react";
import {
    TermsContainer,
    TermsTitle,
    TermsContent,
    TermsItem,
    Main,
    NavbarContainer,
    TermsIntro,
} from "./PrivacyPolicy.style";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <Main>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>

                <TermsContainer>

                    <TermsTitle>Privacy &amp; Policy</TermsTitle>
                    <TermsContent>

                        <TermsIntro>
                            By accessing and using this website, you agree to comply with the following terms:
                        </TermsIntro>

                        <TermsItem>
                            1. <strong>Data Collection:</strong> We collect basic details such as your name, contact information,
                            and enquiry details for communication and service improvement.

                        </TermsItem>
                        <TermsItem>
                            2. <strong>Use of Information:</strong> Your data is used solely to process enquiries,
                            manage accounts, and improve our services.
                        </TermsItem>
                        <TermsItem>
                            3. <strong>Data Security:</strong> All information is stored securely and is not shared with third parties
                            except when required to deliver services  or comply with legal obligations.
                        </TermsItem>
                        <TermsItem>
                            4. <strong>Cookies:</strong>  Our website may use cookies to enhance your browsing experience and track performance analytics.
                        </TermsItem>
                        <TermsItem>
                            5. <strong>User Rights:</strong> You can request access, correction, or deletion of your personal data by contacting us directly.
                        </TermsItem>
                        <TermsItem>
                            6. <strong>Policy Updates:</strong> This policy may be revised occasionally, and updates will be reflected on this page.
                            By using our website, you consent to this Privacy Policy.
                        </TermsItem>
                    </TermsContent>
                </TermsContainer>
                <Footer />
            </Main>
        </>
    );
};

export default PrivacyPolicy;
