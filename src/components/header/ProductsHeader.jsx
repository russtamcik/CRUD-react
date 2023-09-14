import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { products, sort } from "../../data/products";

const ProductsHeader = ({
  search,
  handleSearch,
  averageAge,
  sortCategories,
  handleCategory,
}) => {

  return (
    <header>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={handleSearch}
          placeholder="Search products..."
        />
        <InputGroup.Text id="basic-addon2">{averageAge}</InputGroup.Text>
        <Form.Select onChange={sortCategories}>
          {sort.map((pr) => (
            <option key={pr} value={pr}>
              {pr}
            </option>
          ))}
        </Form.Select>
        <Form.Select onChange={handleCategory}>
          <option value="all">All</option>
          {products.map((pr) => (
            <option key={pr} value={pr}>
              {pr}
            </option>
          ))}
        </Form.Select>
      </InputGroup>
    </header>
  );
};

ProductsHeader.propTypes = {
  search: PropTypes.string,
  averageAge: PropTypes.number,
  handleSearch: PropTypes.func,
  sortCategories: PropTypes.func,
  handleCategory: PropTypes.func,
};

const MemoStudentHeader = memo(ProductsHeader);

export default MemoStudentHeader;
