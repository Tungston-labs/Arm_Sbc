import React, { useState } from "react";
import {
  PageWrapper,
  Container,
  FormSection,
  FormTitle,
  FormDescription,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  InputRow,
  Main,
} from "./InquiryPage.Styles";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import ProductListSection from "../../Components/Inquirypage/ProductListSection";
const InquiryPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    street: "",
    country: "",
    state: "",
    delivery: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.street.trim()) newErrors.street = "Street address is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.delivery.trim()) newErrors.delivery = "Delivery location is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your inquiry has been sent successfully 🚀",
          confirmButtonColor: "#3085d6",
        });
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          street: "",
          country: "",
          state: "",
          delivery: "",
          description: "",
        });
      }, 1500);
    }
  };
  return (
    <>
      <Main>
        <Navbar />
        <PageWrapper>
          <Container>
            <ProductListSection />
            <FormSection>
              <FormTitle>Product Inquiry</FormTitle>
              <FormDescription>
                Thank you for considering ARM-SBC. To talk with our sales
                specialists about your business needs, simply fill out the form
                below, and we’ll reach out to you promptly.
              </FormDescription>

              <Form onSubmit={handleSubmit}>
                <InputGroup>

                  <Label>Your Name</Label>
                  <InputRow>
                    <div>
                      {errors.firstName && <small style={{ color: "red" }}>{errors.firstName}</small>}
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      {errors.lastName && <small style={{ color: "red" }}>{errors.lastName}</small>}
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />

                    </div>
                  </InputRow>
                </InputGroup>

                <InputGroup>

                  <Label>Company Name</Label>
                  <div>
                    {errors.company && <small style={{ color: "red" }}>{errors.company}</small>}
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                </InputGroup>

                <InputGroup>
                  <Label>Email Address</Label>
                  <div>
                    {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                    <Input
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                </InputGroup>

                <InputGroup>
                  <Label>Phone Number</Label>
                  <div>
                    {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                    <Input
                      type="number"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                </InputGroup>

                <InputGroup>
                  <Label>Address</Label>
                  <div>
                    {errors.street && <small style={{ color: "red" }}>{errors.street}</small>}
                    <Input
                      type="text"
                      name="street"
                      placeholder="Street Address"
                      value={formData.street}
                      onChange={handleChange}
                      style={{ marginBottom: "1rem" }}
                    />

                    <InputRow>
                      <div>
                        {errors.country && <small style={{ color: "red" }}>{errors.country}</small>}
                        <Input
                          type="text"
                          name="country"
                          placeholder="Country"
                          value={formData.country}
                          onChange={handleChange}
                        />

                      </div>
                      <div>
                        {errors.state && <small style={{ color: "red" }}>{errors.state}</small>}
                        <Input
                          type="text"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </InputRow>
                  </div>
                </InputGroup>

                <InputGroup>
                  <Label>Delivery Location</Label>
                  <div>
                    {errors.delivery && <small style={{ color: "red" }}>{errors.delivery}</small>}
                    <Input
                      type="text"
                      name="delivery"
                      placeholder="Delivery Location"
                      value={formData.delivery}
                      onChange={handleChange}
                    />
                  </div>

                </InputGroup>

                <InputGroup>
                  <Label>Description</Label>

                  <div>
                    {errors.description && <small style={{ color: "red" }}>{errors.description}</small>}
                    <TextArea
                      name="description"
                      placeholder="Type here..."
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                </InputGroup>

                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </FormSection>
          </Container>
        </PageWrapper>
      </Main>
      <Footer />
    </>
  );
};

export default InquiryPage;
