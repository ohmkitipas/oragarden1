import IndexPage from '../components/page/index';
import LoginPage from '../components/page/Login';
import RegisterPage from '../components/page/Register';
import ProfilePage from '../components/page/Profile';
import ProductsPage from '../components/page/ProductsList';
import AboutUsPage from '../components/page/AboutUs';
import PlantCarePage from '../components/page/PlantCare';
import ShoppingCartPage from '../components/page/ShoppingCarts';
import AdminPage from '../components/page/Admin';
import UploadProductPage from '../components/admin/UploadProduct';
import ProductPage from '../components/page/ProductScreen';

const components ={
    index: {
        url: "/index",
        component: IndexPage
    },

    login: {
        url: "/login",
        component: LoginPage
    },

    register: {
        url: "/register",
        component: RegisterPage
    },

    profile: {
        url: "/profile",
        component: ProfilePage
    },

    productList: {
        url: "/products",
        component: ProductsPage
    },

    aboutUs: {
        url: "/aboutUs",
        component: AboutUsPage
    },

    plantCare: {
        url: "/plantCare",
        component: PlantCarePage
    },

    shoppingCart: {
        url: "/shoppingCart",
        component: ShoppingCartPage
    },

    admin: {
        url: "/admin",
        component: AdminPage
    },

    uploadProduct: {
        url: "/uploadProduct",
        component: UploadProductPage
    },

    product: {
        url: "/products/:id",
        component: ProductPage
    }


};

export default {
    guest: {
        allowedRoutes: [
            components.index,
            components.login,
            components.register,
            components.productList,
            components.aboutUs,
            components.plantCare,
            components.admin,
            components.shoppingCart,
            components.uploadProduct,
            components.product
        ],
        redirectRoutes: "/index"
    },

    user: {
        allowedRoutes: [
            components.profile,
            components.shoppingCart,
            components.index,
            components.login,
            components.register,
            components.productList,
            components.aboutUs,
            components.plantCare,
            components.uploadProduct,
            components.admin,
            components.product
        ],
        redirectRoutes: "/index"
    },

    admin: {
        allowedRoutes:[
            components.admin
        ],
        redirectRoutes: "/index"
    },
};