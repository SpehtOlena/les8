import './FilmCard.css'

const FilmCard = ({ items }) => {
	const { title, year, mainActor, genre, country, photo } = items;
	switch (country) {
		case "США": {
			return (
				<div className={'film-card usa'}>
					<img src={photo} alt={title} />
					<h2>{title}</h2>
					<h6>{year}</h6>
					<h3>{mainActor}</h3>
					<h4>{genre}</h4>
					<h5>{country}</h5>
				</div>
			)
		}
		case "Франція": {
			return (
				<div className={'film-card france'}>
					<img src={photo} alt={title} />
					<h2>{title}</h2>
					<h4>{year}</h4>
					<h3>{mainActor}</h3>
					<h4>{genre}</h4>
					<h4>{country}</h4>
				</div>
			)
		}
		default: {
			return (
				<div className={'film-card also'}>
					<img src={photo} alt={title} />
					<h2>{title}</h2>
					<h6>{year}</h6>
					<h3>{mainActor}</h3>
					<h4>{genre}</h4>
					<h5>{country}</h5>
				</div>
			)
		}
	}

}
export default FilmCard