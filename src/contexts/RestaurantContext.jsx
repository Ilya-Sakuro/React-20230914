import React, { useState } from 'react';

export const RestaurantContext = React.createContext();

export const RestaurantProvider = ({ children }) => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        sessionStorage.getItem('activeTab'),
    );

    return (
        <RestaurantContext.Provider value={{ activeRestaurantId, setActiveRestaurantId }}>
            {children}
        </RestaurantContext.Provider>
    );
};
