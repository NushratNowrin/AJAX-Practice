function populateCountries() {
	const countrySelect = document.getElementById("selectCountry");
	axios.get("https://restcountries.com/v3.1/all").then((res) => {
		res.data.forEach((country) => {
			const option = document.createElement("option");
			option.value = country.name.common;
			option.textContent = country.name.common;
			countrySelect.appendChild = option;
		});
	});
}
window.onload = populateCountries();
