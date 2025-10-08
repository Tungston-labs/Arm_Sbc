import React from "react";
import {
    TermsContainer,
    TermsTitle,
    TermsIntro,
    TermsContent,
    TermsItem,
    Main,
    NavbarContainer
} from "./TermsAndConditions.style";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const TermsAndConditions = () => {
    return (
        <>
            <Main>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>

                <TermsContainer>
                    <TermsTitle>Terms &amp; Conditions</TermsTitle>
                    <TermsIntro>
                        By accessing and using this website, you agree to comply with the following terms:
                    </TermsIntro>
                    <TermsContent>
                        <TermsItem>
                            1. <strong>Use of Platform:</strong> You may use the website solely
                            for browsing products, submitting enquiries, or managing your account.
                        </TermsItem>
                        <TermsItem>
                            2. <strong>Accuracy of Information:</strong> Users are responsible for
                            providing accurate and updated details when submitting enquiries or
                            adding products.
                        </TermsItem>
                        <TermsItem>
                            3. <strong>Intellectual Property:</strong> All content, including text,
                            images, and design, remains the property of the website owner and may
                            not be copied or reproduced without permission.
                        </TermsItem>
                        <TermsItem>
                            4. <strong>User Conduct:</strong> You agree not to use the platform for
                            unlawful, fraudulent, or disruptive activities.
                        </TermsItem>
                        <TermsItem>
                            5. <strong>Limitation of Liability:</strong> The website owner is not
                            liable for any indirect damages, data loss, or interruptions caused by
                            third-party issues.
                        </TermsItem>
                        <TermsItem>
                            6. <strong>Updates:</strong> These terms may be updated periodically,
                            and continued use of the website implies acceptance of any changes.
                        </TermsItem>
                    </TermsContent>
                </TermsContainer>
                <Footer />
            </Main>
        </>
    );
};

export default TermsAndConditions;
