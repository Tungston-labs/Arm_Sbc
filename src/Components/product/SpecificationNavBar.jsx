import { useState } from "react";
import {
  NavItem,
  SpecificationNav,
} from "../../pages/product/singleProduct.style";

const SpecificationNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SpecificationNav>
      <ul>
        {["Description", "Additional Information", "Reviews"].map(
          (tab, index) => (
            <NavItem
              key={index}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
              {tab === "Reviews" && <span>(0)</span>}
            </NavItem>
          )
        )}
      </ul>
    </SpecificationNav>
  );
};

export default SpecificationNavBar;
