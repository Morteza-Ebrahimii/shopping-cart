after make main and app .jsx following these code:

✅1.make component folder
.make Navbar.jsx inside component,
.make fucntoin inside it and export it,
.import Navbar as NavbarBs and button from 'react-bootstrap',
return these code(
<NavbarBs>
<NavbarBs.Collapse>
<Button>ُShopping cart</button>
</NavbarBs.Collapse>
</NavbarBs>
),

✅2. inside App.jsx following these code :

    .import your Navbar file and return it expect your static h2 el,
    .import Container from 'react-bootstrap',
    .replace your div with Container,

✅3. continue inside Navbar:
.get these className to your code(
.Navbarbs.className'border-button border-secondary',
.NavbarBs.collapse.className'justify-content-end',
.Button.variant'btn btn-outline-secondary',
.Button.className'text-white',
)

✅4. inside index.css file:
.get some style to body(
background-color: #111111,
color: #fafafa
)

✅5. install react-icons in command line
.import bsCard from 'react-icon-bs',
.use in your button and get a classes 'mx-2',
.make fonts folder in public folder and make style.css inside it,
.inside style.css write define a @font-face{font-family and src},
.inside index.html make link and get style,

✅6. install react-router-dom in command line,
.make pages folder inside src,
.make Shop.jsx inside pages folder.
.Shop.jsx temperory retunr h2 'shopping cart' and export it as default,
.inside main.jsx import BrowserRouter from 'react-router-dom',
.nested your app component inside BrowserRouter in main.jsx,
.inside app.jsx import Routes and Route from 'react-router-dom',
.indide app.jsx return nested Routes insided Route,
.inside Route make variables index and elements,
.import Shop component inside app.jsx, and get Shop to elements insdie Router,

✅7. inside Shop.jsx
.import Row and Col form 'react-bootstrap',
.expect your h2 return Row with xs={1} and md={4}(we use these varibales for grid and responsivie) and className'g-4',(search about these classes inside react-bootstrap),
.inside Row return Col with align'center',
.inside Col make h3 el temperory with text 'Product',
.copy Row four times inside Col,
.why your page dont have hr bollow your button,ans fix it,

✅8.make data folder name data inside src.
.make items.js file inside data folder,
.items file should contineu these code for four times(
const productList = [
{
id: 1,
title: product,
price: 99,
image: 'image/product.jpg'
}
]
),
.inside public folder make images folder,
.make func name getProductData(id) and return variable name productData,
.in productData use find method that find each data wiht id,
.export productList and productData ,

✅9. add a temperory picture to your images folder.
   .change the address of your image in data,
   .make productItem.jsx inside component folder,
   .inside productItem import Card and Button form 'raect-bootstrap',
   .following thise code in return ProductItem function{
   <Card className='mt-5 card-bg'>

   <Card.body>

   <Card.img
   variant='top'
   src={prop.image}
   height='200px'
   styel={{objectFit: 'cover' }}/>

   <Card.Title
   align='right'
   className='text-right pt-4'
   > {prop.title}
   > </Card.Title>

   <Card.Text
   align='right'
   className='text-light' >
   {prop.price}
   </Card.Text>

   </Card.body>

   <Button
   variant='btn btn-outline-secondary' className='white'

   > Shopping Cart
   > </Button>

   </Card>
   },
   .set prop for your fucn and give value to each items,
   .make classes in index.css(
    .card-bg{
        background-color: #1a1c1e;
    }
   )
