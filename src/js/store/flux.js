const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nave: [

			],
			favoriteName: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			agregar: (name) => {
				const store = getStore();
				if (store.favoriteName.includes(name)) return
				setStore({ favoriteName: [...store.favoriteName, name] })


			},
			deleteFavorite: (index) => {
				const store = getStore();
				
				setStore({ favoriteName: store.favoriteName.filter((_,indice) =>indice !==index)})


			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
		             			*/
				const store = getStore();
				fetch(
					"https://swapi.dev/api/people")
					.then(res => res.json())
					.then(res => setStore({ nave: res.results }))
					.catch(err => console.log(err))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
