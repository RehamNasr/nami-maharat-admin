// Components/ProductForm.js
import React, { useState, useEffect } from 'react';
import './styles.css';

export const ProductForm = ({ onSubmit, initialData }) => {
    const [product, setProduct] = useState({
        name: '',
        imageUrl: '',
        additionalImages: [],
        price: '',
        discount: '',
        available: true,
        type: '',
        minAge: '',
        maxAge: '',
        description: '', // New field
        howToPlay: '',   // New field
        isMultiplayer: false // New field, defaults to false (single-player)
    });

    const [newAdditionalImageUrl, setNewAdditionalImageUrl] = useState('');

    useEffect(() => {
        if (initialData) {
            setProduct(initialData);
        } else {
            // Reset form when not in editing mode
            setProduct({
                name: '',
                imageUrl: '',
                additionalImages: [],
                price: '',
                discount: '',
                available: true,
                type: '',
                minAge: '',
                maxAge: '',
                description: '',
                howToPlay: '',
                isMultiplayer: false
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddAdditionalImage = () => {
        if (newAdditionalImageUrl.trim() && !product.additionalImages.includes(newAdditionalImageUrl.trim())) {
            setProduct(prevProduct => ({
                ...prevProduct,
                additionalImages: [...prevProduct.additionalImages, newAdditionalImageUrl.trim()]
            }));
            setNewAdditionalImageUrl('');
        }
    };

    const handleRemoveAdditionalImage = (imageToRemove) => {
        setProduct(prevProduct => ({
            ...prevProduct,
            additionalImages: prevProduct.additionalImages.filter(image => image !== imageToRemove)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.imageUrl || !product.price) {
            alert('الرجاء ملء الحقول المطلوبة (الاسم، الصورة الرئيسية، السعر).');
            return;
        }
        onSubmit({
            ...product,
            price: parseFloat(product.price),
            discount: product.discount ? parseInt(product.discount) : 0,
            minAge: product.minAge ? parseInt(product.minAge) : null,
            maxAge: product.maxAge ? parseInt(product.maxAge) : null,
        });
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">اسم المنتج:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">وصف اللعبة:</label>
                <textarea
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    rows="4"
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="howToPlay">طريقة اللعب:</label>
                <textarea
                    id="howToPlay"
                    name="howToPlay"
                    value={product.howToPlay}
                    onChange={handleChange}
                    rows="6"
                ></textarea>
            </div>

            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    id="isMultiplayer"
                    name="isMultiplayer"
                    checked={product.isMultiplayer}
                    onChange={handleChange}
                />
                <label htmlFor="isMultiplayer">هل اللعبة جماعية؟</label>
            </div>

            <div className="form-group">
                <label htmlFor="imageUrl">رابط الصورة الرئيسية:</label>
                <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>صور إضافية:</label>
                <div className="additional-images-input">
                    <input
                        type="url"
                        value={newAdditionalImageUrl}
                        onChange={(e) => setNewAdditionalImageUrl(e.target.value)}
                        placeholder="أضف رابط صورة إضافية"
                    />
                    <button type="button" onClick={handleAddAdditionalImage}>إضافة</button>
                </div>
                <div className="additional-images-preview">
                    {product.additionalImages.map((image, index) => (
                        <div key={index} className="additional-image-item">
                            <img src={image} alt={`Additional ${index + 1}`} />
                            <button type="button" onClick={() => handleRemoveAdditionalImage(image)}>X</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="price">السعر (جنيه):</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    step="0.01"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="discount">الخصم (%):</label>
                <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={product.discount}
                    onChange={handleChange}
                    min="0"
                    max="100"
                />
            </div>

            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    id="available"
                    name="available"
                    checked={product.available}
                    onChange={handleChange}
                />
                <label htmlFor="available">متوفر فوراً</label>
            </div>

            <div className="form-group">
                <label htmlFor="type">النوع:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={product.type}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="minAge">الحد الأدنى للسن:</label>
                <input
                    type="number"
                    id="minAge"
                    name="minAge"
                    value={product.minAge}
                    onChange={handleChange}
                    min="0"
                />
            </div>

            <div className="form-group">
                <label htmlFor="maxAge">الحد الأقصى للسن:</label>
                <input
                    type="number"
                    id="maxAge"
                    name="maxAge"
                    value={product.maxAge}
                    onChange={handleChange}
                    min="0"
                />
            </div>

            <button type="submit">{initialData ? 'تحديث المنتج' : 'إضافة المنتج'}</button>
        </form>
    );
};