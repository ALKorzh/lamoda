import './App.css';

import { React, useCallback, useMemo, useState } from 'react';

import { generateProducts } from './generateData';
import SearchForm from './components/SearchForm/SearchForm';
import FilteredList from './components/ProductList/ProductList';
import Filters from './components/Filters/Filters';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [products] = useState(generateProducts());
  const [filters, setFilters] = useState({
    search: '',
    color: '',
    price: [10, 9999],
  });
  const [sortType, setSortType] = useState('priceAsc');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters.color.length > 0) {
      result = result.filter((p) => filters.color.includes(p.color));
    }

    const [minPrice, maxPrice] = filters.price;
    result = result.filter((p) => p.price <= maxPrice && p.price >= minPrice);

    switch (sortType) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'ratingDesc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [products, sortType, filters]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, []);

  const handleSortChange = useCallback((type) => {
    setSortType(type);
  }, []);
  return (
    <div>
      <SearchForm filters={filters} onFilterChange={handleFilterChange} />
      <Filters sortType={sortType} onSortChange={handleSortChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;