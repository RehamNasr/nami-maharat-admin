// Components/ProductTable.js
import React from 'react';
import './styles.css';

export const ProductTable = ({ products, onEdit, onDelete }) => {
    console.log("products:::",products)
    return (
        <div className="product-table-container">
            {products.length === 0 ? (
                <p>لا توجد منتجات لعرضها.</p>
            ) : (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>الاسم</th>
                            <th>السعر</th>
                            <th>الخصم</th>
                            <th>السن</th>
                            <th>الحالة</th>
                            <th>الصور</th>
                            <th>الوصف</th> {/* New column */}
                            <th>طريقة اللعب</th> {/* New column */}
                            <th>النوع</th> {/* New column for multiplayer/single */}
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price.toFixed(2)} جنيه</td>
                                <td>{product.discount}%</td>
                                <td>{product.minAge}{product.maxAge ? ` - ${product.maxAge}` : ''}</td>
                                <td>{product.available ? 'متوفر' : 'غير متوفر'}</td>
                                <td className="product-images-cell">
                                    {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="product-thumbnail" />}
                                    {product.additionalImages && product.additionalImages.map((img, idx) => (
                                        <img key={idx} src={img} alt={`${product.name} - ${idx}`} className="product-thumbnail additional" />
                                    ))}
                                </td>
                                <td className="product-description-cell">{product.description}</td> {/* Display description */}
                                <td className="product-how-to-play-cell">{product.howToPlay}</td> {/* Display howToPlay */}
                                <td>{product.isMultiplayer ? 'جماعية' : 'فردية'}</td> {/* Display game type */}
                                <td className="product-actions-cell">
                                    <button onClick={() => onEdit(product)} className="edit-button">تعديل</button>
                                    <button onClick={() => onDelete(product.id)} className="delete-button">حذف</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};