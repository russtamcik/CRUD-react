import { memo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductsTable = ({ products, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products && products.length ? (
          products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.desc}</td>
              <td className="d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center">
              No products
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

const MemoProductsTable = memo(ProductsTable);

export default MemoProductsTable;
