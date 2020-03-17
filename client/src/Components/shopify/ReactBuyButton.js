import React, { useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = (theme =>(
  {
    product: {
      product: {
        maxWidth: "calc(25% - 20px)",
        marginLeft: "20px",
        marginBottom: "50px",
        media:{
          minWidth: '601px',
        },
      },
      media:{
        minWidth: '601px',
        maxWidth: "calc(25% - 20px)",
        marginLeft: "20px",
        marginBottom: "50px" 
      },
    },
    productSet: {
      products: {
        marginLeft: "-20px",
        media: {
          minWidth: '601px',
        },
      },
    },
  }
))

const ReactBuyButton = (props) => {
  const [id, setId] = useState(props.shopifyId)
  const [domain, setDomain] = useState(props.domain)
  const [storeFrontAccessToken] = useState(props.storeFrontAccessToken)
  const [scriptURL] = useState('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js')
  const [moneyFormat] = useState("%24%7B%7Bamount%7D%7D")

  useEffect(()=>{
    loadScript()
  },[])

  function loadScript() {
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = window.ShopifyBuy.buildClient({
      domain: domain,
      storefrontAccessToken: storeFrontAccessToken,
    });
    window.ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4618152673411',
        node: document.getElementById('product-component-1583776071693'),
        moneyFormat: moneyFormat,
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              }
            },
            "buttonDestination": "checkout",
            "text": {
              "button": "Buy now"
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
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          }
        },
      });
    });
  }

  // function ShopifyBuyInit() {
  //    const client = window.ShopifyBuy.buildClient({
  //     domain: domain,
  //     storefrontAccessToken: storeFrontAccessToken,
  //   });
  //   window.ShopifyBuy.UI.onReady(client).then(function (ui) {
  //     ui.createComponent('product', {
  //       id: id,
  //       node: document.getElementById('product-component-1583776071693'),
  //       moneyFormat: moneyFormat,
  //     })
  //   })
  // }
  
  return(
    <Button>
      Buy now
    </Button>
  )
}

const StyledReactBuyButton = withStyles(styles)(ReactBuyButton)

export default StyledReactBuyButton