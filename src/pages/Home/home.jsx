import './home.css'
import { UseFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/loader'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import Error500 from '../Error/error500'
import img_banner_home from '../../assets/img_banner_home.png'

function Home() {
  const { data, isLoading, error } = UseFetch(`https://boogysh.github.io/kasa-api/data.json`)
  
  if (error) return <Error500 />
  
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_home">
      <Banner src={img_banner_home} title="Chez vous, partout et ailleurs" />
      <section id="cards">
        {data.map((lodging) => {
          const { id, cover, title } = lodging

          return (
            <Link to={`/logements/${id}`} key={id} className="card__link">
              <Card image={cover} title={title} />
            </Link>
          )
        })}
      </section>
    </main>
  )
}
export default Home
