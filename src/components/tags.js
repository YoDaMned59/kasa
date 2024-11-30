import React from 'react';

export const Tags = ({ tags }) => {
    return (
        <div className="tags-container">
            {tags && tags.length > 0 ? (
                tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))
            ) : (
                <p>No tags available</p>
            )}
        </div>
    );
};