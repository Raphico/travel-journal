function Travel(props) {
  return (
    <div className="container">
      <div className="travel">
        <div>
          <img className="travel-img" src={props.imageUrl} alt="location image" />
        </div>

        <div className="travel-info">
          <div className='flex' style={{ '--gap': '0.7rem' }}>
            <div className="flex" style={{ '--gap': '0.3rem' }}>
              <img src="/icon-navigation.svg" alt="navigation icon" />
              <p className='letter-spacing text-upper'>{props.location}</p>
            </div>
            <a className="googleMapsUrl fs-300 text-gray" href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
          </div>

          <h1 className="fs-600 fw-700">{props.title}</h1>

          <p className="dates fs-300 fw-600">{props.startDate} - {props.endDate}</p>
          
          <p>{props.description}</p>
        </div>
      </div>
      <div className="bar"></div>
    </div>
  )
}

export default Travel
