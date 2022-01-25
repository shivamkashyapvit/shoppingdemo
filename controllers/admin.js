const Product = require('../model/product');


exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
    //  userId: req.user
    });
    product
      .save()
     res.status(200).json({message :'product insert  successfully'})

      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/admin/products');
      })
      .catch(err => {
        console.log(err);
      });
  };



  exports.getAllProducts = ( (req,res,next) => {
 Product.find()
  // res.status(200).json(product)
  .then( productsAll => {
    res.status(200).json(productsAll)
  })
  .catch(err => {console.log(err)})
})


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  
  Product.findByIdAndRemove(prodId)
    .then((del) => {
      res.status(200).json(del , {message : "Product deleted "})
     
      console.log('DESTROYED PRODUCT');
  
    })
    .catch(err => console.log(err));
};


exports.getProductForEdit = (req, res, next) => {
  const prodId = req.params.productId;
  
  Product.findById(prodId)
    .then( product => {
      
      res.status(200).json(product)
  
    })
    .catch(err => console.log(err));
};

