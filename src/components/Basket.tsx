import React from 'react';
import { useBasket } from '../contexts/BasketContext';
import { ShoppingBasket, X } from 'lucide-react';

export default function Basket() {
  const { basketItems, removeFromBasket, clearBasket } = useBasket();
  const [isOpen, setIsOpen] = React.useState(false);

  const totalCost = basketItems.reduce((sum, item) => {
    const itemPrice = item.price || 0;
    const itemQuantity = item.quantity || 0;
    return sum + (itemPrice * itemQuantity);
  }, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
      >
        <ShoppingBasket className="w-5 h-5" />
        <span className="text-sm font-medium">
          Basket ({basketItems.length}) - £{totalCost.toFixed(2)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Shopping Basket</h3>
            <button
              onClick={clearBasket}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Clear all
            </button>
          </div>

          {basketItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your basket is empty</p>
          ) : (
            <div className="space-y-2">
              {basketItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.quantity || 0} x £{(item.price || 0).toFixed(2)} ({item.supermarket})
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromBasket(item)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t">
                <p className="text-sm font-medium flex justify-between">
                  <span>Total:</span>
                  <span>£{totalCost.toFixed(2)}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 