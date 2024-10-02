import React, { useState } from 'react';
import styled from 'styled-components';

const AllProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'CRYSTAL AGATE PHONE GRIP - 18.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 2,
      name: 'CRYSTAL AGATE PHONE GRIP - 19.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 3,
      name: 'CRYSTAL AGATE PHONE GRIP - 17.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 4,
      name: 'CRYSTAL AGATE PHONE GRIP - 20.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 1,
      name: 'CRYSTAL AGATE PHONE GRIP - 18.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 2,
      name: 'CRYSTAL AGATE PHONE GRIP - 19.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 3,
      name: 'CRYSTAL AGATE PHONE GRIP - 17.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 4,
      name: 'CRYSTAL AGATE PHONE GRIP - 20.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    // Add more products as needed
  ];

  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Best Selling');

  return (
    <ProductsPage>
      <Heading>All Products</Heading>
      <FilterSortContainer>
        <FilterContainer>
          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="New Arrivals">New</option>
            <option value="Discounted">Discounted</option>
            <option value="Popular">Popular</option>
          </select>
        </FilterContainer>
        <SortContainer>
          <label htmlFor="sort">Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Best Selling">Best Selling</option>
            <option value="Price: Low to High">Low to High</option>
            <option value="Price: High to Low">High to Low</option>
          </select>
        </SortContainer>
      </FilterSortContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <BuyNowButton>Buy Now</BuyNowButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsPage>
  );
};

const ProductsPage = styled.div`
  padding: 50px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;
  backgrund: none;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;

  label {
    font-weight: bold;
    background: none;
  }

  select {
    background: none;
    border: none;
    font-weight: bold;
    color: inherit;
    padding: 8px;
    appearance: none; /* Remove default select styling */
    -webkit-appearance: none; /* For Safari */
    -moz-appearance: none; /* For Firefox */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns%3D%27http%3A//www.w3.org/2000/svg%27 width%3D%2710%27 height%3D%276%27 viewBox%3D%270 0 10 6%27%3E%3Cpath fill%3D%27%23333%27 d%3D%27M0 0l5 5 5-5H0z%27/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 0px center;
    background-size: 10px;
    cursor: pointer;
  }
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;

  label {
    font-weight: bold;
    background: none;
  }

  select {
    background: none;
    border: none;
    font-weight: bold;
    color: inherit;
    padding: 10px;
    appearance: none; /* Remove default select styling */
    -webkit-appearance: none; /* For Safari */
    -moz-appearance: none; /* For Firefox */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns%3D%27http%3A//www.w3.org/2000/svg%27 width%3D%2710%27 height%3D%276%27 viewBox%3D%270 0 10 6%27%3E%3Cpath fill%3D%27%23333%27 d%3D%27M0 0l5 5 5-5H0z%27/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 0px center;
    background-size: 12px;
    cursor: pointer;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border-radius: 10px;
  background: white;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  margin: 15px 0;
  font-size: 1.1rem;
  color: #4F75FF;
`;

const BuyNowButton = styled.button`
  background: none;
  color: #1e90ff;
  border: 2px solid #00CCDD;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(to right, #00bfff, #1e90ff);
    color: white;
    border: 1px solid #fff;
  }
`;

export default AllProducts;
