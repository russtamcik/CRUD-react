import { useCallback, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 } from "uuid";

import ProductForm from "../components/forms/ProductForm";
import ProductsHeader from "../components/header/ProductsHeader";
import ProductsTable from "../components/table/ProductsTable";

const HomePage = () => {
  const studentsJson = localStorage.getItem("products");
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState(JSON.parse(studentsJson) || []);
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    category: "Drinks",
    quantity: "",
    desc: "",
  });
  console.log(product);
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const firstNameInputRef = useRef();

  const handleStudent = useCallback(
    (e) => {
      setProduct({ ...product, [e.target.id]: e.target.value });
    },
    [product]
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      setValidated(true);
      event.preventDefault();

      if (form.checkValidity()) {
        const newProducts = [...products, { ...product, id: v4() }];
        setProducts(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));

        firstNameInputRef.current.focus();

        setValidated(false);
        setProduct({
          productName: "",
          price: "",
          category: "Drinks",
          quantity: "",
          desc: "",
        });
      }
    },
    [product, products]
  );

  const result = useMemo(
    () =>
      products.filter((el) => el.productName.toLowerCase().includes(search)),
    [search, products]
  );

  const averageAge = +(
    result.reduce((acc, el) => acc + +el.price, 0) / products.length
  ).toFixed(2);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const updatedProducts = products.filter((el) => el.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    },
    [products]
  );

  const sortCategories = useCallback((e) => {
    setSort(e.target.value);
  }, []);

  let sortedResults = useMemo(() => {
    let sorted = [...result];
    if (sort !== "") {
      sorted.sort((a, b) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        if (sort === "min") {
          return priceA - priceB;
        } else if (sort === "max") {
          return priceB - priceA;
        }
        return 0;
      });
    }
    return sorted;
  }, [result, sort]);

  const handleCategory = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  let filterCategories = useMemo(() => {
    if (filter !== "") {
      if (filter === "all") {
        return sortedResults;
      } else {
        return sortedResults.filter((el) => el.category === filter);
      }
    } else {
      return sortedResults;
    }
  }, [sortedResults, filter]);
  console.log(filter);

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <ProductForm
            ref={firstNameInputRef}
            product={product}
            handleStudent={handleStudent}
            handleSubmit={handleSubmit}
            validated={validated}
          />
        </Col>
        <Col lg={8}>
          <ProductsHeader
            search={search}
            handleSearch={handleSearch}
            averageAge={averageAge}
            setSort={setSort}
            sortCategories={sortCategories}
            handleCategory={handleCategory}
          />
          <ProductsTable
            products={filterCategories}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
