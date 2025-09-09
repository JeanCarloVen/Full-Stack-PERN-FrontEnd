import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader, action as updateAvailabilityAction } from './views/Products'
import NewProduct, {action as newProductAction} from './views/NewProduct'
import EditProduct, {loader as editProductLoader, action as editProductAction} from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products/>,
                loader: productsLoader, //se carga antes que el componente <Products/>
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern //  Resource - Oriented Design
                element: <EditProduct/>,
                loader: editProductLoader, // Sirve para consumo de APIS
                action: editProductAction //sirve para formularios
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
        
    }
])