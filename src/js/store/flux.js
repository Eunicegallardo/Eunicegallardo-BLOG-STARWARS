const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterStarWars: [],
			planetsStarWars: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ characterStarWars: data.results }))
					.catch(err => console.error(err))

			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({planetsStarWars: data.results}))
					.catch(err => console.error(err))

			}
		}
	};
};

export default getState;
