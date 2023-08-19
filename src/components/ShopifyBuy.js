import React, { useEffect, useRef } from 'react';

const ShopifyBuyButton = ({ productId }) => {
  const productRef = useRef();

  useEffect(() => {
    let isMounted = true;

    const loadShopifySDK = () => {
      return new Promise((resolve) => {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          script.onload = () => {
            resolve();
          };
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        }
      });
    };

    const initializeBuyButton = () => {
      if (!isMounted) return;

      const client = window.ShopifyBuy.buildClient({
        domain: 'nofaceclub.myshopify.com',
        storefrontAccessToken: 'bebbe31a4432498067834a098145e689',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        if (!isMounted) return;

        ui.createComponent('product', {
          id: 6959503802465,
          node: productRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px',
                  },
                },
                title: {
                  color: '#ffffff',
                  display:'none',
                  'font-family':'AnotherTag',
                },
                button: {
                  'font-size': '1.1rem',
                  "text-align":'center',
                  width:'300px',
                  color: 'white',
                  'background-color': '#E50914',
                  'font-weight': '900',
                  border: '1.1px solid #fcb4b4',
                  ':hover': {
                    color: '#E50914',
                    'background-color': 'white',
                  },
                  'box-shadow': '0 0 0px #fcb4b4',
                  ':focus': {
                    'background-color': '#ce0812',
                  },
                },
                price: {
                  display:'none',
                  color: '#f5f5f5',
                },
                compareAt: {
                  color: '#f5f5f5',
                },
                unitPrice: {
                  color: '#f5f5f5',
                },
              },
              text: {
                button: 'PRE  ORDER',

              },
            },
            cart: {
              styles: {
                button: {
                  color: '#f9f9f9',
                  ':hover': {
                    color: '#f9f9f9',
                    'background-color': '#ce0812',
                  },
                  'background-color': '#e50914',
                  ':focus': {
                    'background-color': '#ce0812',
                  },
                },
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout',
              },
            },
            option: {
              styles: {
                select: {
                  'margin-inline-start':'0',
                  'background-color': '#000',
                  color: '#fff',
                  'font-size': '18px',
                  border: '.1px solid #fcb4b4',
                },
              },
            },
          },
        });
      });
    };

    loadShopifySDK().then(() => {
      initializeBuyButton();
    });

   


    // Cleanup function to prevent multiple instances and clear when unmounting
    return () => {
        isMounted = false;
        if (productRef.current) {
          productRef.current.innerHTML = '';
        }
      };
    }, [productId]);
  
    return <div ref={productRef} />;
  };
  
  export default ShopifyBuyButton;


