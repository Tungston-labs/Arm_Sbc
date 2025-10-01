import {
  FormButton,
  FormInputGroup,
  FormLabel,
  FormRow,
  ReviewHeader,
  StartContainer,
  TextInput,
} from "../../../pages/product/singleProduct.style";
import { ErrorMessage } from "./reviewFormContainer.styled";
import StarToggle from "./StarToggle";

const ReviewFrom = ({
  formData,
  handleChange,
  handleStarClick,
  errors,
  onSubmit,
  loading,
}) => {
  return (
    <>
      <ReviewHeader>
        <h4>Reviews</h4>
        <p>
          Your email address will not be published. Required fields are marked 
          <span>*</span>
        </p>
      </ReviewHeader>
      <form onSubmit={onSubmit}>
        <FormRow>
          <FormInputGroup width="50%">
            <FormLabel>
              Name <span>*</span>
            </FormLabel>
            <TextInput
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormInputGroup>
          <FormInputGroup width="50%">
            <FormLabel>
              Email <span>*</span>
            </FormLabel>
            <TextInput
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormInputGroup>
        </FormRow>
        <FormRow>
          <FormInputGroup>
            <FormLabel>
              Your rating <span>*</span>
            </FormLabel>
            <StartContainer>
              {[...Array(5)].map((_, index) => (
                <StarToggle
                  key={index}
                  filled={index < formData.rating}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </StartContainer>
            {errors.rating && <ErrorMessage>{errors.rating}</ErrorMessage>}
          </FormInputGroup>
        </FormRow>
        <FormRow>
          <FormInputGroup>
            <FormLabel>
              Your review <span>*</span>
            </FormLabel>
            <TextInput
              as="textarea"
              rows={5}
              value={formData.review}
              name="review"
              onChange={handleChange}
            />
            {errors.review && <ErrorMessage>{errors.review}</ErrorMessage>}
          </FormInputGroup>
        </FormRow>
        <FormRow>
          <FormButton disabled={loading}>Submit</FormButton>
        </FormRow>
      </form>
    </>
  );
};

export default ReviewFrom;
