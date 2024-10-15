"use client";

import React, { useState } from "react";
import styles from './page.module.css';
import { shops, Shop } from './shop';  // Import the shops data

const SHOPS_PER_PAGE = 10; // Number of shops per page

const DiscoverPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedShop, setSelectedShop] = useState<Shop | null>(null); // Track the selected shop
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Filter shops based on search and category selection
    const filteredShops = Object.entries(shops).reduce(
        (acc, [category, shopList]) => {
            const isSelectedCategory = selectedCategory === "" || selectedCategory === category;
            const filteredList = shopList.filter(
                (shop) =>
                    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    shop.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (isSelectedCategory && filteredList.length > 0) {
                acc.push({ category, shops: filteredList });
            }
            return acc;
        },
        [] as { category: string; shops: Shop[] }[]
    );

    // Handle pagination
    const paginatedShops = filteredShops.slice(
        (currentPage - 1) * SHOPS_PER_PAGE,
        currentPage * SHOPS_PER_PAGE
    );

    const handleNextPage = () => {
        if (currentPage * SHOPS_PER_PAGE < filteredShops.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // Handle shop selection
    const handleShopClick = (shop: Shop) => {
        setSelectedShop(selectedShop === shop ? null : shop); // Toggle the selected shop
    };

    return (
        <div className={styles.discover}>
            <div className={styles.shopContainer}>
                {/* Search Bar */}
                <div className={styles.header}>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search for shops or categories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchBar}
                        />
                        <button className={styles.searchButton}>Search</button>
                    </div>
                </div>

                {/* Category Dropdown */}
                <div className={styles.dropdownContainer}>
                    <select
                        className={styles.categoryDropdown}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {Object.keys(shops).map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Shop Section */}
                <div className={styles.categories}>
                    {paginatedShops.map(({ category, shops }) => (
                        <div key={category} className={styles.category}>
                            <h2>{category}</h2>
                            <div className={styles.shopList}>
                                {shops.map((shop) => (
                                    <div key={shop.name} className={styles.shopCard}>
                                        <img
                                            src={shop.photo}
                                            alt={shop.name}
                                            className={styles.shopPhoto}
                                            onClick={() => handleShopClick(shop)} // Show details on image click
                                        />
                                        <h3>{shop.name}</h3>
                                        <p>{shop.description}</p>
                                        <p>{shop.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar for Shop Details */}
            <div className={styles.detailsSidebar}>
                {selectedShop ? (
                    <div className={styles.shopDetails}>
                        <h2>{selectedShop.name}</h2>
                        <img src={selectedShop.photo} alt={selectedShop.name} className={styles.shopDetailImage} />
                        <p><strong>Description:</strong> {selectedShop.description}</p>
                        <p><strong>Location:</strong> {selectedShop.location}</p>
                        <p><strong>Contact:</strong> {selectedShop.mobile}</p>
                        {/* Add more details if needed */}
                    </div>
                ) : (
                    <p>Select a shop to see the details</p>
                )}
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.paginationButton}>
                    Previous
                </button>
                <span className={styles.pageNumber}>Page {currentPage}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage * SHOPS_PER_PAGE >= filteredShops.length}
                    className={styles.paginationButton}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DiscoverPage;
