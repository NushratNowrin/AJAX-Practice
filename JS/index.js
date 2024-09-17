// Get with Fetch
function ajaxWithFetch() {
	fetch("https://jsonplaceholder.typicode.com/todos")
		.then((res) => res.json())
		.then((datas) => {
			datas.map((data) => console.log(data.title));
		})
		.catch((error) => {
			console.log(error);
		});
}

// Get with Axios
function ajaxWithAxios() {
	axios
		.get("https://jsonplaceholder.typicode.com/todos")
		.then((res) => {
			const datas = res.data;
			datas.map((singleData) => console.log(singleData.title));
		})
		.catch((err) => console.log(err));
}

// Post with Fetch
function postWithFetch() {
	const postData = {
		title: "foo",
		body: "bar",
		userId: 1,
	};
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify(postData),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err));
}

// Post with Axios
function postWithAxios() {
	const postDataAxios = {
		title: "axios post",
		body: "axios post bar",
		userId: 1,
	};
	axios
		.post("https://jsonplaceholder.typicode.com/posts", postDataAxios, {
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
}
