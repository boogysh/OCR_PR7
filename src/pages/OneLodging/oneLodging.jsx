import Slider from '../../components/Slider/slider'
import LodgingDetails from '../../components/LodgingDetails/lodgingDetails'
import DropDown from '../../components/dropDown/dropDown'
import Error404 from '../Error/error404'
import Error500 from '../Error/error500'
import Loader from '../../components/Loader/loader'
import './oneLodging.css'
import { UseFetch } from '../../hooks/useFetch'

function OneLodging() {
  const { data, isLoading, error } = UseFetch(`/data.json`)
  const { pictures, description, equipments } = data
  if (error) {
    return <Error500 />
  } // if (!data) {
  else if (!pictures && !description && !equipments) {
    return <Error404 />
  }
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_oneProduct">
      <Slider slides={pictures} />
      <LodgingDetails />
      <section className="dropDown_container">
        <DropDown title="Description" content={description} />
        <div className="separe"></div>
        <DropDown title="Equipements" content={equipments} />
      </section>
    </main>
  )
}
export default OneLodging

