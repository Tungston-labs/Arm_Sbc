import {
  NavItem,
  SpecificationNav,
} from "../../../pages/product/singleProduct.style";

const SpecificationNavBar = ({ activeIndex, setActiveIndex, navItem }) => {
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
            {tab === "Reviews" && <span>(0)</span>}
          </NavItem>
        ))}
      </ul>
    </SpecificationNav>
  );
};

export default SpecificationNavBar;
