import { forwardRef, memo } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { products } from "../../data/products";

const ProductsForm = forwardRef(
  ({ product, handleStudent, handleSubmit, validated }, ref) => {
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            ref={ref}
            onChange={handleStudent}
            value={product.productName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={product.price}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleStudent} value={product.category}>
            {products.map((pr) => (
              <option key={pr} value={pr}>
                {pr}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={product.quantity}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={product.desc}
            required
            as="textarea"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3 w-100" type="submit">
          Add Product
        </Button>
      </Form>
    );
  }
);

ProductsForm.displayName = "ProductsForm";

ProductsForm.propTypes = {
  product: PropTypes.object,
  handleStudent: PropTypes.func,
  handleSubmit: PropTypes.func,
  validated: PropTypes.bool,
};

const MemoStudentForm = memo(ProductsForm);

export default MemoStudentForm;
