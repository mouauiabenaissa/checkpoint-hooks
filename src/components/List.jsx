import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavoris } from "../redux/action";

const List = () => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "Bird Box",
      description:
        "Depuis cinq ans ,une présence invisible et mançante pousse la population au suicide .Mais une femme et ses deux enfants font le pari insensé de lui échapper .... ",
      posterURL: "https://static.xemovie.com/images/Film/Movies/BirdBox.jpg",
      rating: "5.5",
    },
    {
      id: 2,
      title: "Blood Red Sky",
      description:
        "Lorsque des terroristes detournent un vol transatlantique de nuit,une femme souffrant d'une mystérieuse  maladie doit réveler un secret monstrueux pour proteger son fils ",
      posterURL: "https://m.media-amazon.com/images/I/71FF7tJ88dS._SS500_.jpg",
      rating: "6.2",
    },
    {
      id: 3,
      title: "Love Hard",
      description:
        "Une jeune femme de LosAngeles traverse le pays pendant les fetes pour surprendre l'homme qu'elle a rencontré sur internet,ùais découvre qu'elle s'est fait avoir ",
      posterURL:
        "https://fictionhorizon.com/wp-content/uploads/2021/11/Love-Hard-poster.jpg",
      rating: "7.4",
    },
    {
      id: 4,
      title: "Army of the Dead",
      description:
        "Aprés une attaque de zombie à Las Végas ,un groupe demarcenaires tente un pari fou:le braquage le plus spectaculaire  de tous les temps ...dans la zone de quarantine",
      posterURL:
        "https://static1.tribute.ca/poster/660x980/army-of-the-dead-netflix-152638.jpg",
      rating: "4",
    },
    {
      id: 5,
      title: "Bik N3ich ",
      description:
        "Aprés la révolution de Jasmine et avant la mort de Mouammar Khadafi,la trgédie d'une femme tunisienne leve le voile sur la corruption et le trafic d'organes ",
      posterURL:
        "https://media.elcinema.com/uploads/_315x420_daf42061982d6eff659c2dc1a12a259712c02ef63cf0290b9437283ba736f768.jpg",
      rating: "8",
    },
    {
      id: 6,
      title: "Beyrouth o Beyrouth ",
      description:
        "Au lendemain de la geurre israélo-arabe de 1967,quatre jeunes en devenir évoluent Libanais  dans un contexte politique en pleine mutation  ",
      posterURL:
        "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYvbywD5ENrSZAKcrS3Dbsxxafz26cSjS84RKNmGWxzwero6p_tFAnEiuu49lpRr6Ki_bhcgZTF9fisFBVkBQOi2ljo.jpg?r=d7d",
      rating: "8.6",
    },
    {
      id: 7,
      title: "Noura reve",
      description:
        "Lorsque son mari violent bénefice d'une libération anticipée,une femme  se bat pour sauver la nouvelle vie qu'elle avait imaginée avec son amant et ses trois enfants .  ",
      posterURL:
        "https://i0.wp.com/cinematunisien.com/wp-content/uploads/2019/09/NouraReve_aff1.jpg?zoom=1.25&resize=678%2C381",
      rating: "7.5",
    },
    {
      id: 8,
      title: "La plateforme",
      description:
        " Une plateforme de nourriture descend d'étage en étage pour ravitailler les detenus d'une prison.  ",
      posterURL: "https://wallpapercave.com/wp/wp7307672.jpg",
      rating: "6",
    },
    {
      id: 9,
      title: "Marriage Story",
      description:
        "Le cinéaste nommé aux Oscars  Noah Baumbach porte un ragrd aussi incisif qu'empathique sur une famille restant unie malgré un mariage en déroute",
      posterURL:
        "https://www.meewella.com/critic/images/film/20191211-marriagestory.jpg",
      rating: "5",
    },
    {
      id: 10,
      title: "The Invisible Man",
      description:
        "Aprés avoir  fui une ralation abusive  avec une richissime génie des hautes  technologie ,un femme est harceleéet toumonteé par une entité invisible ",
      posterURL:
        "https://fr.web.img3.acsta.net/r_1920_1080/pictures/20/02/24/09/21/2936902.jpg",
      rating: "9.1",
    },
  ]);

  const [filter, setFilter] = useState(movies);

  const dispatch = useDispatch();
  const AddMovie = (data) => {
    dispatch(addToFavoris(data));
  };
  const filterFilmsTitle = (title) => {
    const updatedList = movies.filter((film) => film.title === title);
    setFilter(updatedList);
  };

  const inRange = (rate, min, max) => {
    return (rate - min) * (rate - max) <= 0;
  };

  const filterFilmsRate = (min, max) => {
    const updatedList = movies.filter((film) => inRange(film.rating, min, max));
    setFilter(updatedList);
  };

  const ShowFilms = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-light w-25  ms-3"
            onClick={() => setFilter(movies)}
          >
            All
          </button>
          <button
            className="btn btn-outline-light w-25  ms-3"
            onClick={() => filterFilmsTitle("Marriage Story")}
          >
            Title
          </button>
          <button
            className="btn btn-outline-light w-25 ms-3"
            onClick={() => filterFilmsRate(3, 6)}
          >
            Rating
          </button>
        </div>
        {filter.map((movie, key) => {
          return (
            <>
              <div className="col" key={key}>
                <div
                  className="image-container d-flex mb-4"
                  style={{
                    margin: "auto",
                    backgroundColor: "#3D3D3D",
                    width: "550px",
                    height: "230px",
                  }}
                >
                  <div className="part1" style={{ width: "400px" }}>
                    <div className="col">
                      <div className="row ">
                        <h3 style={{ color: "white" }}>{movie.title}</h3>
                      </div>
                      <div className="row text-danger mb-1">
                        <h6>{movie.rating}</h6>
                      </div>
                      <div className="row text-secondary mb-2">
                        <h6 style={{ color: "white" }}>{movie.description}</h6>
                      </div>
                      <div className="row m-1">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => AddMovie(movie)}
                        >
                          <i class="fas fa-plus-circle fa-1x m-2 ">
                            {" "}
                            Ajouter à la liste
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="part2 " style={{ width: "50%" }}>
                    <img
                      src={movie.posterURL}
                      style={{ width: "280px", height: "230px" }}
                    ></img>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div
        className="col-md-12 text-center display-5 p-4"
        style={{ color: "white" }}
      >
        <h1>Liste des Films</h1>
      </div>

      <div className="row">
        <ShowFilms />
      </div>
    </div>
  );
};

export default List;
