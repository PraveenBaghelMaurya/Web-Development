let data = document.querySelector(".data");
let data2 = document.querySelector(".data2");
let secondBtn = document.querySelector(".secondBtn");

function callData() {
  data.innerHTML = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum exercitationem veritatis fugiat at deserunt. Itaque eius aperiam harum debitis placeat?</p>`;
}
function callData() {
  data.innerHTML = `<p>NEw Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum exercitationem veritatis fugiat at deserunt. Itaque eius aperiam harum debitis placeat?</p>`;
}

secondBtn.addEventListener("click", () => {
  data2.innerHTML += `The environment encompasses all living and non-living things that surround us, including air, water, soil, plants, and animals. It plays a crucial role in sustaining life by providing essential resources like oxygen, food, and shelter. However, human activities such as deforestation, pollution, and industrialization have led to environmental degradation, threatening biodiversity and climate stability. Conservation efforts, including afforestation, waste management, and sustainable living, are necessary to protect our planet. Governments, organizations, and individuals must work together to reduce carbon footprints, promote renewable energy, and adopt eco-friendly practices to ensure a healthier, greener, and more sustainable future for generations to come.`;
});
secondBtn.addEventListener("click", () => {
  data2.innerHTML += `The environment for AI refers to the digital and computational ecosystem in which artificial intelligence operates. It includes hardware, software, datasets, algorithms, and network infrastructures that enable AI to process information, learn patterns, and make decisions. AI environments can be cloud-based, edge-based, or embedded in physical devices like robots and IoT systems. Factors like data quality, computational power, ethical considerations, and security influence AI performance. A well-optimized AI environment ensures efficient training, deployment, and scalability. Continuous advancements in AI ecosystems, such as machine learning frameworks and quantum computing, are shaping the future of intelligent systems across various industries.`;
});
