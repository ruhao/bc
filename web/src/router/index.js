import Vue from 'vue'
import Router from 'vue-router'
import Indexen from '@/component/index/index'
import Contacten from '@/component/contact/contact'
import Messageen from '@/component/message/message'
import interneten from '@/component/internet/internet'
import CompanyServeren from '@/component/internet/companyserver'
import Imarketingen from '@/component/internet/marketing'
import ServerDetailen from '@/component/internet/severdetail'
import Hren from '@/component/hr/hr'
import Strategyen from '@/component/hr/strategy'
import Trainen from '@/component/hr/train'
import Advertisesen from '@/component/hr/advertises'
import Newsen from '@/component/news/news'
import CompanyNewsen from '@/component/news/companynews'
import CompanyPhotosen from '@/component/news/companyphotos'
import Marketingen from '@/component/news/marketing'
import IndustryDynamicsen from '@/component/news/industrydynamics'
import PhotoDetailen from '@/component/news/photodetail'
import Abouten from '@/component/about/about'
import AboutHonoren from '@/component/about/honor'
import AboutCultureen from '@/component/about/culture'
import AboutFrameworken from '@/component/about/framework'
import AboutFootprinten from '@/component/about/footprint'
import Producten from '@/component/product/product'
import ProductListen from '@/component/product/productlist'
import ProductCiden from '@/component/product/productcid'
import ProductDetailen from '@/component/product/productdetail'
import Index from '@/components/index/index'
import Contact from '@/components/contact/contact'
import Message from '@/components/message/message'
import internet from '@/components/internet/internet'
import CompanyServer from '@/components/internet/companyserver'
import Imarketing from '@/components/internet/marketing'
import ServerDetail from '@/components/internet/severdetail'
import Hr from '@/components/hr/hr'
import Strategy from '@/components/hr/strategy'
import Train from '@/components/hr/train'
import Advertises from '@/components/hr/advertises'
import Strategy1 from '@/components/hr/mobile/strategy'
import Train1 from '@/components/hr/mobile/train'
import Advertises1 from '@/components/hr/mobile/advertises'
import News from '@/components/news/news'
import Newdetail from '@/components/news/newdtail'
import CompanyNews from '@/components/news/companynews'
import CompanyPhotos from '@/components/news/companyphotos'
import Marketing from '@/components/news/marketing'
import IndustryDynamics from '@/components/news/industrydynamics'
import PhotoDetail from '@/components/news/photodetail'
import About from '@/components/about/about'
import AboutHonor from '@/components/about/honor'
import AboutCulture from '@/components/about/culture'
import AboutFramework from '@/components/about/framework'
import AboutFootprint from '@/components/about/footprint'
import Product from '@/components/product/product'
import Brandlist from '@/components/product/brandlist'
import Brand from '@/components/product/brand'
import Branddetail from '@/components/product/branddetail'
import ProductList from '@/components/product/productlist'
import ProductCid from '@/components/product/productcid'
import ProductDetail from '@/components/product/productdetail'
import PhotoDetail1 from '@/components/news/photodetaill'
import Shopcart from '@/components/product/shopcart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/product',
      components: {
        default: Product
      },
      children: [{
        path: '/',
        components: {
          default: ProductList
        }
      }, {
        path: 'productcid/:id',
        name: 'productcid',
        components: {
          default: ProductCid
        }
      }, {
        path: 'productdetail/:id',
        name: 'productdetail',
        components: {
          default: ProductDetail
        }
      },
      {
        path: '/brand',
        components: {
          default: Brand
        },
        children: [{
          path: '/',
          components: {
            default: Brandlist
          }
        },
        {
          path: 'branddetail/:id',
          name: 'branddetail',
          components: {
            default: Branddetail
          }
        }]
      }]
    },
    {
      path: '/shopcart',
      components: {
        default: Shopcart
      }
    },
    {
      path: '/about',
      components: {
        default: About
      },
      children: [{
        path: 'honor',
        components: {
          default: AboutHonor
        }
      }, {
        path: 'culture',
        components: {
          default: AboutCulture
        }

      }, {
        path: 'framework',
        components: {
          default: AboutFramework
        }
      }, {
        path: 'footprint',
        components: {
          default: AboutFootprint
        }
      }]
    },
    {
      path: '/news',
      components: {
        default: News
      },
      children: [{
        path: '/',
        components: {
          default: CompanyNews
        }
      }, {
        path: 'newdetail',
        name: 'newdetail',
        components: {
          default: Newdetail
        }
      },
      {
        path: 'companyphotos',
        components: {
          default: CompanyPhotos
        }
      }, {
        path: 'marketing',
        components: {
          default: Marketing
        }
      }, {
        path: 'industrydynamics',
        components: {
          default: IndustryDynamics
        }
      }, {
        path: 'photodetail/:content',
        name: 'photodetail',
        components: {
          default: PhotoDetail
        }
      }, {
        path: 'photodetail1/:content',
        name: 'photodetail1',
        components: {
          default: PhotoDetail1
        }
      }]
    },
    {
      path: '/hr',
      components: {
        default: Hr
      },
      children: [{
        path: 'strategy',
        components: {
          default: Strategy
        }
      }, {
        path: 'train',
        components: {
          default: Train
        }
      }, {
        path: 'advertises',
        components: {
          default: Advertises
        }
      }, {
        path: 'strategy1',
        components: {
          default: Strategy1
        }
      }, {
        path: 'train1',
        components: {
          default: Train1
        }
      }, {
        path: 'advertises1',
        components: {
          default: Advertises1
        }
      }]
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/internet',
      name: 'internet',
      component: internet,
      children: [{
        path: 'server',
        components: {
          default: CompanyServer
        }
      }, {
        path: '/',
        components: {
          default: Imarketing
        }
      }, {
        path: 'severdetail/:content',
        name: 'severdetail',
        components: {
          default: ServerDetail
        }
      }]
    },
    {
      path: '/enproduct',
      components: {
        default: Producten
      },
      children: [{
        path: '/',
        components: {
          default: ProductListen
        }
      }, {
        path: 'enproductcid/:id',
        name: 'enproductcid',
        components: {
          default: ProductCiden
        }
      }, {
        path: 'enproductdetail/:content',
        name: 'enproductdetail',
        components: {
          default: ProductDetailen
        }
      }]
    },
    {
      path: '/enabout',
      components: {
        default: Abouten
      },
      children: [{
        path: 'enhonor',
        components: {
          default: AboutHonoren
        }
      }, {
        path: 'enculture',
        components: {
          default: AboutCultureen
        }

      }, {
        path: 'enframework',
        components: {
          default: AboutFrameworken
        }
      }, {
        path: 'enfootprint',
        components: {
          default: AboutFootprinten
        }
      }]
    },
    {
      path: '/ennews',
      components: {
        default: Newsen
      },
      children: [{
        path: '/',
        components: {
          default: CompanyNewsen
        }
      }, {
        path: 'encompanyphotos',
        components: {
          default: CompanyPhotosen
        }
      }, {
        path: 'enmarketing',
        components: {
          default: Marketingen
        }
      }, {
        path: 'enindustrydynamics',
        components: {
          default: IndustryDynamicsen
        }
      }, {
        path: 'enphotodetail/:content',
        name: 'enphotodetail',
        components: {
          default: PhotoDetailen
        }
      }]
    },
    {
      path: '/enhr',
      components: {
        default: Hren
      },
      children: [{
        path: 'enstrategy',
        components: {
          default: Strategyen
        }
      }, {
        path: 'entrain',
        components: {
          default: Trainen
        }
      }, {
        path: 'enadvertises',
        components: {
          default: Advertisesen
        }
      }]
    },
    {
      path: '/en',
      name: 'enindex',
      component: Indexen
    },
    {
      path: '/enContact',
      name: 'enContact',
      component: Contacten
    },
    {
      path: '/enMessage',
      name: 'enMessage',
      component: Messageen
    },
    {
      path: '/eninternet',
      name: 'eninternet',
      component: interneten,
      children: [{
        path: 'enserver',
        components: {
          default: CompanyServeren
        }
      }, {
        path: '/',
        components: {
          default: Imarketingen
        }
      }, {
        path: 'enseverdetail/:content',
        name: 'enseverdetail',
        components: {
          default: ServerDetailen
        }
      }]
    }
  ]
})
