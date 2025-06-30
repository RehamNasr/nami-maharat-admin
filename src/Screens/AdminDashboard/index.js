import React, { useState, useEffect } from 'react';
import './AdminDashboard.module.css';
import { ProductForm } from '../../Components/ProductForm';
import { ProductTable } from '../../Components/ProductTable';
import { 
  getProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct 
} from '../../services/products';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to load products", error);
            }
        };
        loadProducts();
    }, []);

    const handleAddProduct = async (newProduct) => {
        try {
            const addedProduct = await addProduct(newProduct);
            setProducts([...products, addedProduct]);
            setEditingProduct(null);
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            await updateProduct(updatedProduct.id, updatedProduct);
            setProducts(products.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            ));
            setEditingProduct(null);
        } catch (error) {
            console.error("Failed to update product", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Failed to delete product", error);
        }
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    return (
        <div className="admin-dashboard">
            <h1>لوحة تحكم الأدمن</h1>

            <hr />

            <h2>{editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h2>
            <ProductForm
                onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                initialData={editingProduct}
            />

            <hr />

            <h2>قائمة المنتجات</h2>
            <ProductTable
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
            />
        </div>
    );
};

export default AdminDashboard;