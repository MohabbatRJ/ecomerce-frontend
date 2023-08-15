import BestDeal from '../../components/Home/BestDeal/BestDeal'
import Feature from '../../components/Home/Feature/Feature'
import RecentlyView from '../../components/Home/RecentlyView/RecentlyView'
import NewProduct from '../../components/Global/NewProduct/NewProduct'
import Info from '../../components/Home/Info/Info'

function HomePage() {
  return (
    <>
      <BestDeal />
      <NewProduct/>
      <Feature />
      <RecentlyView />
      <Info/>
    </>
  )
}

export default HomePage
