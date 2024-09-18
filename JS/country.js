function searchCountry() {
	const result = document.querySelector(".result");
	const status = document.querySelector(".status");
	const country = document.getElementById("country").value;
	status.textContent = `Searching for ${country}.....`;
	const capitalElement = document.querySelector(".capital");
	const populationElement = document.querySelector(".population");

	const imgElement = document.querySelector(".flag");
	const errElement = document.querySelector(".error");
	const endpoint = `https://restcountries.com/v3.1/name/${country}`;

	axios
		.get(endpoint)
		.then((res) => {
			const data = res.data[0];
			const name = data.name.common;

			const capital = data.capital[0];

			const population = data.population;

			const flag = data.flags.png;
			const flagImg = `<img src=${flag} alt=${name} width='100' />`;

			console.log(name, capital, population, flag);
			capitalElement.textContent = `Capital: ${capital}`;
			populationElement.textContent = `Population: ${population}`;
			imgElement.innerHTML = flagImg;
		})
		.catch((err) => {
			console.log(err);
			status.textContent = `${country} not found`;
			capitalElement.textContent = "";
			populationElement.textContent = "";
			imgElement.textContent = "";
		});
}
