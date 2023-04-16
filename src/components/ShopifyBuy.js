import React, { useEffect } from 'react';
import ShopifyBuy from 'shopify-buy';


const Product = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    let script = document.createElement('script');
    script.src = scriptURL;
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      const client = ShopifyBuy.buildClient({
        domain: 'nofaceclub.myshopify.com',
        storefrontAccessToken: 'bebbe31a4432498067834a098145e689'
      });
      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '6959503802465',
          node: document.getElementById('product-component-1681679604887'),
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
                "button": {
                  ":hover": {
                    "background-color": "#ce0812"
                  },
                  "background-color": "#e50914",
                  ":focus": {
                    "background-color": "#ce0812"
                  }
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
                  ":hover": {
                    "background-color": "#ce0812"
                  },
                  "background-color": "#e50914",
                  ":focus": {
                    "background-color": "#ce0812"
                  }
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
                  ":hover": {
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
                }
              }
            }
          },
        });
      });
    });
  }, []);

  return <div id="product-component-1681679604887" />;
};

export default Product;

