import React, { useEffect, useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const AllProductPageBuyButton = () => {
  const collectionRef = useRef();

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

    const initializeCollection = () => {
      if (!isMounted) return;

      const client = window.ShopifyBuy.buildClient({
        domain: 'nofaceclub.myshopify.com',
        storefrontAccessToken: 'bebbe31a4432498067834a098145e689',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        if (!isMounted) return;

        ui.createComponent('collection', {
          id: '307860176993',
          node: collectionRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              
                "contents": {
                  "img": true,
                  "imgWithCarousel": true, 
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(35% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                      "width": "calc(35% - 20px)"

                    },
                    "img": {
                      "height": "calc(170% - 15px)",
                      "position": "absolute",
                      "left": "0",
                      "right": "0",
                      "top": "0"

                    },
                    "imgWrapper": {
                      "padding-top": "calc(70% + 15px)",
                      "position": "relative",
                    },

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
                    },

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
                  },
                  "title": {
                    "color": "#ff0000"
                  },
                  "header": {
                    "color": "#ff0000"
                  },
                  "lineItems": {
                    "color": "#ff0000"
                  },
                  "subtotalText": {
                    "color": "#ff0000"
                  },
                  "subtotal": {
                    "color": "#ff0000"
                  },
                  "notice": {
                    "color": "#ff0000"
                  },
                  "currency": {
                    "color": "#ff0000"
                  },
                  "close": {
                    "color": "#ff0000",
                    ":hover": {
                      "color": "#ff0000"
                    }
                  },
                  "empty": {
                    "color": "#ff0000"
                  },
                  "noteDescription": {
                    "color": "#ff0000"
                  },
                  "discountText": {
                    "color": "#ff0000"
                  },
                  "discountIcon": {
                    "fill": "#ff0000"
                  },
                  "discountAmount": {
                    "color": "#ff0000"
                  },
                  "cart": {
                    "background-color": "#050505"
                  },
                  "footer": {
                    "background-color": "#050505"
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
                  }
                }
              },
              "lineItem": {
                "styles": {
                  "variantTitle": {
                    "color": "#ff0000"
                  },
                  "title": {
                    "color": "#ff0000"
                  },
                  "price": {
                    "color": "#ff0000"
                  },
                  "fullPrice": {
                    "color": "#ff0000"
                  },
                  "discount": {
                    "color": "#ff0000"
                  },
                  "discountIcon": {
                    "fill": "#ff0000"
                  },
                  "quantity": {
                    "color": "#ff0000"
                  },
                  "quantityIncrement": {
                    "color": "#ff0000",
                    "border-color": "#ff0000"
                  },
                  "quantityDecrement": {
                    "color": "#ff0000",
                    "border-color": "#ff0000"
                  },
                  "quantityInput": {
                    "color": "#ff0000",
                    "border-color": "#ff0000"
                  }
                },
              },
          },
        });
      });
    };

    loadShopifySDK().then(() => {
        initializeCollection();
      });
  
      // Cleanup function to prevent multiple instances and clear when unmounting
      return () => {
        isMounted = false;
        if (collectionRef.current) {
          collectionRef.current.innerHTML = '';
        }
      };
  
    }, []);
  
    return <div ref={collectionRef} id='collection-component-1696947524997'></div>;
  };
  
  export default AllProductPageBuyButton;