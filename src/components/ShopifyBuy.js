import React, { useEffect, useRef } from 'react';

const ShopifyBuyButton = () => {
  const productRef = useRef();

  useEffect(() => {
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
      const client = window.ShopifyBuy.buildClient({
        domain: 'nofaceclub.myshopify.com',
        storefrontAccessToken: 'bebbe31a4432498067834a098145e689',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '6959503802465',
          node: productRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  "title": {
                    "color": "#ffffff"
                  },
                  "button": {
                    "color": "#f9f9f9",
                    ":hover": {
                      "color": "#f9f9f9",
                      "background-color": "#ce0812"
                    },
                    "background-color": "#e50914",
                    ":focus": {
                      "background-color": "#ce0812"
                    }
                  },
                  "price": {
                    "color": "#f5f5f5"
                  },
                  "compareAt": {
                    "color": "#f5f5f5"
                  },
                  "unitPrice": {
                    "color": "#f5f5f5"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    "color": "#f9f9f9",
                    ":hover": {
                      "color": "#f9f9f9",
                      "background-color": "#ce0812"
                    },
                    "background-color": "#e50914",
                    ":focus": {
                      "background-color": "#ce0812"
                    }
                  },
                  "title": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "bold",
                    "font-size": "26px",
                    "color": "#4c4c4c"
                  },
                  "price": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    "color": "#4c4c4c"
                  },
                  "compareAt": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c"
                  },
                  "unitPrice": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "option": {},
              "cart": {
                "styles": {
                  "button": {
                    "color": "#f9f9f9",
                    ":hover": {
                      "color": "#f9f9f9",
                      "background-color": "#ce0812"
                    },
                    "background-color": "#e50914",
                    ":focus": {
                      "background-color": "#ce0812"
                    }
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                }
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#e50914",
                    ":hover": {
                      "background-color": "#ce0812"
                    },
                    ":focus": {
                      "background-color": "#ce0812"
                    }
                  },
                  "count": {
                    "color": "#f9f9f9",
                    ":hover": {
                      "color": "#f9f9f9"
                    }
                  },
                  "iconPath": {
                    "fill": "#f9f9f9"
                },
            }
        }
    }
            });
          });
        };
        loadShopifySDK().then(() => {
            initializeBuyButton();
          });
      
          // Cleanup function to prevent multiple instances
          return () => {
            if (productRef.current) {
              productRef.current.innerHTML = '';
            }
          };
        }, []); // Empty dependency array to ensure the effect runs only once
      
        return <div id="product-component-1681879189619" ref={productRef}></div>;
      };
      
      export default ShopifyBuyButton;

