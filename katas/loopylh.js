const loopyLighthouse = function () {
	for (let i = 100; i <= 200; i++) {
		i % 3 === 0 && i % 5 === 0
			? console.log("Loopy Lighthouse")
			: i % 3 === 0
			? console.log("Loopy")
			: i % 4 === 0
			? console.log("Lighthouse")
			: console.log(i);
	}
};

loopyLighthouse();
