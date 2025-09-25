import {
  FormButton,
  FormInputGroup,
  FormLabel,
  FormRow,
  StartContainer,
  TextInput,
} from "../../../pages/product/singleProduct.style";
import StarToggle from "./StarToggle";

const ReviewFrom = () => {
  return (
    <form>
      <FormRow>
        <FormInputGroup width="50%">
          <FormLabel>
            Name <span>*</span>
          </FormLabel>
          <TextInput />
        </FormInputGroup>
        <FormInputGroup width="50%">
          <FormLabel>
            Email <span>*</span>
          </FormLabel>
          <TextInput />
        </FormInputGroup>
      </FormRow>
      <FormRow>
        <FormInputGroup>
          <FormLabel>
            Your rating <span>*</span>
          </FormLabel>
          <StartContainer>
            {" "}
            {[...Array(5)].map((_, index) => (
              <StarToggle key={index} />
            ))}
          </StartContainer>
        </FormInputGroup>
      </FormRow>
      <FormRow>
        <FormInputGroup>
          <FormLabel>
            Your review <span>*</span>
          </FormLabel>
          <TextInput as="textarea" rows={5} />
        </FormInputGroup>
      </FormRow>
      <FormRow>
        <FormButton>Submit</FormButton>
      </FormRow>
    </form>
  );
};

export default ReviewFrom;
