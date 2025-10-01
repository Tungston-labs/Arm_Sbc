import { DownOutlined } from "@ant-design/icons";
import ReviewFrom from "./ReviewFrom";
import { StyledCollapse } from "./reviewFormContainer.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview, fetchReviews } from "../../../redux/reviewSlice";
import { toast } from "react-toastify";
import { validateReview } from "../../../utils/reviewValidation";

const ReviewFormContainer = ({ productId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const updateForm = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => {
      if (prevErrors[name]) {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      }
      return prevErrors;
    });
  };

  const handleChange = (e) => updateForm(e.target.name, e.target.value);
  const handleStarClick = (index) => updateForm("rating", index + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateReview(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await dispatch(
        createReview({
          productId,
          reviewData: formData,
        })
      ).unwrap();

      toast.success("Review added successfully!");
      setFormData({ name: "", email: "", rating: 0, review: "" });
      dispatch(fetchReviews({ productId }));
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledCollapse
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      items={[
        {
          key: "1",
          label: "Add Review",
          children: (
            <ReviewFrom
              formData={formData}
              handleChange={handleChange}
              handleStarClick={handleStarClick}
              errors={errors}
              onSubmit={handleSubmit}
              loading={loading}
            />
          ),
        },
      ]}
    />
  );
};

export default ReviewFormContainer;
