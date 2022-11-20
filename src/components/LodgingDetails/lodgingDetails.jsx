import Tags from '../Tags/tags'
import Rating from '../Rating/rating'
import Host from '../Host/host'
import Error500 from '../../pages/Error/error500'
import './lodgingDetails.css'
import { UseFetch } from '../../hooks/useFetch'

function LodgingDetails() {
  const { data, error } = UseFetch(`/data.json`)
  const { title, location, tags, host = [], rating } = data
  
  if (error) <Error500 />

  return (
    <section className="sectionName">
      <div>
        <h2 className="h2_title">{title}</h2>
        <h3 className="h3_title">{location}</h3>
        <div className="tags_container">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="host_rating">
        <div>
          <Host name={host.name} picture={host.picture} />
        </div>
        <div className="rating_container">
          <Rating rating={rating} />
        </div>
      </div>
    </section>
  )
}
export default LodgingDetails
