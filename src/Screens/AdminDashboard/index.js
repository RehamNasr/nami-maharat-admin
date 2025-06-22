// Pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import './AdminDashboard.module.css';
import { ProductForm } from '../../Components/ProductForm';
import { ProductTable } from '../../Components/ProductTable';

 const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    // Removed locationName state as it's not needed for a single-place site

    useEffect(() => {
        // In a real application, you'd fetch products from your backend here.
        // For now, we'll use some dummy data with new fields.
        const dummyProducts = [
            {
                id: '1',
                name: 'لعبة الألوان',
                imageUrl: 'https://via.placeholder.com/150',
                additionalImages: ['https://via.placeholder.com/100/0000FF/FFFFFF?text=Img2', 'https://via.placeholder.com/100/FF0000/FFFFFF?text=Img3'],
                price: 150.00,
                discount: 10,
                available: true,
                type: 'تعليمي',
                minAge: 3,
                maxAge: 7,
                description: 'لعبة تعليمية ممتعة للأطفال لتنمية مهارات التعرف على الألوان والأشكال المختلفة.',
                howToPlay: 'يقوم اللاعب بوضع القطع الملونة في الأماكن المخصصة لها حسب اللون والشكل. تتضمن اللعبة بطاقات تحدي لزيادة المتعة.',
                isMultiplayer: false // Example: Single-player
            },
            {
                id: '2',
                name: 'مكعبات البناء الضخمة',
                imageUrl: 'https://via.placeholder.com/150',
                additionalImages: [],
                price: 200.00,
                discount: 0,
                available: false,
                type: 'بناء',
                minAge: 5,
                maxAge: 12,
                description: 'مجموعة كبيرة من المكعبات المتينة لإنشاء هياكل ثلاثية الأبعاد لا نهاية لها.',
                howToPlay: 'يمكن للأطفال استخدام المكعبات لبناء أي شيء يتخيلونه، من الأبراج الشاهقة إلى المدن المعقدة. يمكن اللعب بشكل فردي أو جماعي.',
                isMultiplayer: true // Example: Multiplayer
            },
        ];
        setProducts(dummyProducts);
    }, []);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
        setEditingProduct(null);
    };

    const handleUpdateProduct = (updatedProduct) => {
        setProducts(products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        ));
        setEditingProduct(null);
    };

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    return (
        <div className="admin-dashboard">
            <h1>لوحة تحكم الأدمن</h1>

            {/* Removed location name section */}

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
export default AdminDashboard