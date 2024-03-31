import MovieComponent from "@/components/MovieComponent";
import { Movie } from "@/utils/types";
import { cache } from "react";

async function getMovies() {
	const response = await fetch("http://localhost:8080/movies", {
		cache: "no-cache",
	});
	const movies = await response.json();
	return movies;

	return [
		{
			id: 1,

			created_at: "2024-03-29T20:31:40.341599Z",

			title: "Inception",

			releaseYear: 2010,

			genre: "Science Fiction",

			director: "Christopher Nolan",

			reviews: [
				{
					id: 2,

					rating: 4,

					description: "Beautiful",

					created_at: "2024-03-29T21:24:55.006131Z",
				},
				{
					id: 2,

					rating: 4,

					description: "Beautiful",

					created_at: "2024-03-29T21:24:55.006131Z",
				},
				{
					id: 2,

					rating: 4,

					description: "Beautiful",

					created_at: "2024-03-29T21:24:55.006131Z",
				}
			],
		},

		{
			id: 2,

			created_at: "2024-03-29T20:31:40.404349Z",

			title: "Interstellar",

			releaseYear: 2014,

			genre: "Science Fiction",

			director: "Christopher Nolan",

			reviews: [],
		},

		{
			id: 3,

			created_at: "2024-03-29T20:31:40.446509Z",

			title: "The Shawshank Redemption",

			releaseYear: 1994,

			genre: "Drama",

			director: "Frank Darabont",

			reviews: [],
		},

		{
			id: 4,

			created_at: "2024-03-29T20:31:40.491234Z",

			title: "Forrest Gump",

			releaseYear: 1994,

			genre: "Drama",

			director: "Robert Zemeckis",

			reviews: [],
		},

		{
			id: 5,

			created_at: "2024-03-29T20:31:40.537195Z",

			title: "The Matrix",

			releaseYear: 1999,

			genre: "Science Fiction",

			director: "Lana Wachowski, Lilly Wachowski",

			reviews: [],
		},

		{
			id: 6,

			created_at: "2024-03-29T20:31:40.583877Z",

			title: "The Lord of the Rings: The Fellowship of the Ring",

			releaseYear: 2001,

			genre: "Fantasy",

			director: "Peter Jackson",

			reviews: [],
		},

		{
			id: 7,

			created_at: "2024-03-29T20:31:40.634460Z",

			title: "Pulp Fiction",

			releaseYear: 1994,

			genre: "Crime",

			director: "Quentin Tarantino",

			reviews: [],
		},

		{
			id: 8,

			created_at: "2024-03-29T20:31:40.676332Z",

			title: "The Godfather",

			releaseYear: 1972,

			genre: "Crime",

			director: "Francis Ford Coppola",

			reviews: [],
		},

		{
			id: 9,

			created_at: "2024-03-29T20:31:40.720079Z",

			title: "Titanic",

			releaseYear: 1997,

			genre: "Romance",

			director: "James Cameron",

			reviews: [],
		},

		{
			id: 10,

			created_at: "2024-03-29T20:31:40.760433Z",

			title: "Jurassic Park",

			releaseYear: 1993,

			genre: "Science Fiction",

			director: "Steven Spielberg",

			reviews: [],
		},

		{
			id: 11,

			created_at: "2024-03-29T20:31:40.810189Z",

			title: "The Silence of the Lambs",

			releaseYear: 1991,

			genre: "Thriller",

			director: "Jonathan Demme",

			reviews: [],
		},

		{
			id: 12,

			created_at: "2024-03-29T20:31:40.858135Z",

			title: "Schindler's List",

			releaseYear: 1993,

			genre: "Drama",

			director: "Steven Spielberg",

			reviews: [],
		},

		{
			id: 13,

			created_at: "2024-03-29T20:31:40.906618Z",

			title: "The Green Mile",

			releaseYear: 1999,

			genre: "Drama",

			director: "Frank Darabont",

			reviews: [],
		},

		{
			id: 14,

			created_at: "2024-03-29T20:31:40.953410Z",

			title: "Gladiator",

			releaseYear: 2000,

			genre: "Action",

			director: "Ridley Scott",

			reviews: [],
		},

		{
			id: 15,

			created_at: "2024-03-29T20:31:41.001533Z",

			title: "The Prestige",

			releaseYear: 2006,

			genre: "Drama",

			director: "Christopher Nolan",

			reviews: [],
		},

		{
			id: 16,

			created_at: "2024-03-29T20:31:41.052505Z",

			title: "The Departed",

			releaseYear: 2006,

			genre: "Crime",

			director: "Martin Scorsese",

			reviews: [],
		},

		{
			id: 17,

			created_at: "2024-03-29T20:31:41.101700Z",

			title: "Fight Club",

			releaseYear: 1999,

			genre: "Drama",

			director: "David Fincher",

			reviews: [],
		},

		{
			id: 18,

			created_at: "2024-03-29T20:31:41.146239Z",

			title: "The Lion King",

			releaseYear: 1994,

			genre: "Animation",

			director: "Roger Allers, Rob Minkoff",

			reviews: [],
		},

		{
			id: 19,

			created_at: "2024-03-29T20:31:41.193300Z",

			title: "Terminator 2: Judgment Day",

			releaseYear: 1991,

			genre: "Science Fiction",

			director: "James Cameron",

			reviews: [],
		},

		{
			id: 20,

			created_at: "2024-03-29T20:31:41.237322Z",

			title: "The Sixth Sense",

			releaseYear: 1999,

			genre: "Thriller",

			director: "M. Night Shyamalan",

			reviews: [],
		},

		{
			id: 21,

			created_at: "2024-03-29T20:31:41.285322Z",

			title: "Saving Private Ryan",

			releaseYear: 1998,

			genre: "War",

			director: "Steven Spielberg",

			reviews: [],
		},

		{
			id: 22,

			created_at: "2024-03-29T20:31:41.342300Z",

			title: "The Truman Show",

			releaseYear: 1998,

			genre: "Comedy",

			director: "Peter Weir",

			reviews: [],
		},

		{
			id: 23,

			created_at: "2024-03-29T20:31:41.391703Z",

			title: "The Big Lebowski",

			releaseYear: 1998,

			genre: "Comedy",

			director: "Joel Coen, Ethan Coen",

			reviews: [],
		},

		{
			id: 24,

			created_at: "2024-03-29T20:31:41.446149Z",

			title: "Spirited Away",

			releaseYear: 2001,

			genre: "Animation",

			director: "Hayao Miyazaki",

			reviews: [],
		},

		{
			id: 25,

			created_at: "2024-03-29T20:31:41.498590Z",

			title: "Se7en",

			releaseYear: 1995,

			genre: "Thriller",

			director: "David Fincher",

			reviews: [],
		},

		{
			id: 26,

			created_at: "2024-03-29T20:31:41.542209Z",

			title: "The Shining",

			releaseYear: 1980,

			genre: "Horror",

			director: "Stanley Kubrick",

			reviews: [],
		},

		{
			id: 27,

			created_at: "2024-03-29T20:31:41.591238Z",

			title: "Alien",

			releaseYear: 1979,

			genre: "Science Fiction",

			director: "Ridley Scott",

			reviews: [],
		},

		{
			id: 28,

			created_at: "2024-03-29T20:31:41.639978Z",

			title: "Eternal Sunshine of the Spotless Mind",

			releaseYear: 2004,

			genre: "Romance",

			director: "Michel Gondry",

			reviews: [],
		},

		{
			id: 29,

			created_at: "2024-03-29T20:31:41.688142Z",

			title: "Memento",

			releaseYear: 2000,

			genre: "Thriller",

			director: "Christopher Nolan",

			reviews: [],
		},

		{
			id: 30,

			created_at: "2024-03-29T20:31:41.741522Z",

			title: "The Lord of the Rings: The Return of the King",

			releaseYear: 2003,

			genre: "Fantasy",

			director: "Peter Jackson",

			reviews: [],
		},

		{
			id: 31,

			created_at: "2024-03-29T20:31:41.786152Z",

			title: "The Wizard of Oz",

			releaseYear: 1939,

			genre: "Fantasy",

			director: "Victor Fleming",

			reviews: [],
		},

		{
			id: 32,

			created_at: "2024-03-29T20:31:41.838321Z",

			title: "Psycho",

			releaseYear: 1960,

			genre: "Horror",

			director: "Alfred Hitchcock",

			reviews: [],
		},

		{
			id: 33,

			created_at: "2024-03-29T20:31:41.882565Z",

			title: "The Exorcist",

			releaseYear: 1973,

			genre: "Horror",

			director: "William Friedkin",

			reviews: [],
		},

		{
			id: 34,

			created_at: "2024-03-29T20:31:41.934440Z",

			title: "The Princess Bride",

			releaseYear: 1987,

			genre: "Fantasy",

			director: "Rob Reiner",

			reviews: [],
		},

		{
			id: 35,

			created_at: "2024-03-29T20:31:41.981588Z",

			title: "Django Unchained",

			releaseYear: 2012,

			genre: "Western",

			director: "Quentin Tarantino",

			reviews: [],
		},

		{
			id: 36,

			created_at: "2024-03-29T20:31:42.032281Z",

			title: "The Grand Budapest Hotel",

			releaseYear: 2014,

			genre: "Comedy",

			director: "Wes Anderson",

			reviews: [],
		},

		{
			id: 37,

			created_at: "2024-03-29T20:31:42.081735Z",

			title: "Groundhog Day",

			releaseYear: 1993,

			genre: "Comedy",

			director: "Harold Ramis",

			reviews: [],
		},

		{
			id: 38,

			created_at: "2024-03-29T20:31:42.132528Z",

			title: "Reservoir Dogs",

			releaseYear: 1992,

			genre: "Crime",

			director: "Quentin Tarantino",

			reviews: [],
		},

		{
			id: 39,

			created_at: "2024-03-29T20:31:42.176086Z",

			title: "The Intouchables",

			releaseYear: 2011,

			genre: "Comedy",

			director: "Olivier Nakache, Eric Toledano",

			reviews: [],
		},

		{
			id: 40,

			created_at: "2024-03-29T20:31:42.221103Z",

			title: "Amelie",

			releaseYear: 2001,

			genre: "Romance",

			director: "Jean-Pierre Jeunet",

			reviews: [],
		},

		{
			id: 41,

			created_at: "2024-03-29T20:31:42.277273Z",

			title: "Requiem for a Dream",

			releaseYear: 2000,

			genre: "Drama",

			director: "Darren Aronofsky",

			reviews: [],
		},

		{
			id: 42,

			created_at: "2024-03-29T20:31:42.321562Z",

			title: "The Butterfly Effect",

			releaseYear: 2004,

			genre: "Science Fiction",

			director: "Eric Bress, J. Mackye Gruber",

			reviews: [],
		},

		{
			id: 43,

			created_at: "2024-03-29T20:31:42.371324Z",

			title: "The Hangover",

			releaseYear: 2009,

			genre: "Comedy",

			director: "Todd Phillips",

			reviews: [],
		},

		{
			id: 44,

			created_at: "2024-03-29T20:31:42.416401Z",

			title: "Downfall",

			releaseYear: 2004,

			genre: "Drama",

			director: "Oliver Hirschbiegel",

			reviews: [],
		},

		{
			id: 45,

			created_at: "2024-03-29T20:31:42.461290Z",

			title: "Whiplash",

			releaseYear: 2014,

			genre: "Drama",

			director: "Damien Chazelle",

			reviews: [],
		},
	];

	}

export default async function Home() {
	const movies: Movie[] = await getMovies();
	console.log(movies);

	return (
		<div className="w-full items-start justify-center flex flex-col gap-8 p-20">
			<div className="text-4xl">Movies</div>
			<MovieComponent movies={movies} />
		</div>
	);
}
