import { useSelector } from "react-redux";
import {
  NavItem,
  SpecificationNav,
} from "../../../pages/product/singleProduct.style";

const SpecificationNavBar = ({ activeIndex, setActiveIndex, navItem }) => {
    const { items } = useSelector((state) => state.reviews);

  return (
    <SpecificationNav>
      <ul>
        {navItem?.map((tab, index) => (
          <NavItem
            key={index}
            active={activeIndex === tab}
            onClick={() => setActiveIndex(tab)}
          >
            {tab}
            {tab === "Reviews" && <span>({Number(items?.total_reviews)||0})</span>}
          </NavItem>
        ))}
      </ul>
    </SpecificationNav>
  );
};

export default SpecificationNavBar;
