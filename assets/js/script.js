const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const galeria = document.getElementById("galeria");
const dormitorios = document.getElementById("dormitorios");
const metros = document.getElementById("metros");
const btn = document.getElementById("btn");
const contador = document.getElementById("counter");
const metrosDesde = document.getElementById("metrosDesde");
const metrosHasta = document.getElementById("metrosHasta");

const crearTarjeta = (propiedad) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const template = `
		<img src="${propiedad.src}">
		<h3>${propiedad.name}</h2>
    <div class="card-p">
      <p> Dorm: ${propiedad.rooms}</p>
      <p> Metros: ${propiedad.m}</p>
    </div>
		<p>${propiedad.description}</h3>
	`;

  card.innerHTML = template;
  galeria.appendChild(card);
};

for (let propiedad of propiedades) {
  crearTarjeta(propiedad);
}

btn.addEventListener("click", () => {
  if (dormitorios.value === "" || metrosDesde.value === "" || metrosHasta.value === "") {
    alert("Faltan campos por llenar");
    return;
  }

  galeria.innerHTML = "";
  let counter = 0;

  const rooms = Number(dormitorios.value);
  const desde = Number(metrosDesde.value);
  const hasta = Number(metrosHasta.value);

  for (let propiedad of propiedades) {
    if (propiedad.rooms >= rooms && propiedad.m >= desde && propiedad.m < hasta) {
      crearTarjeta(propiedad);
      counter = counter + 1;
    }
  }

  contador.innerHTML = counter;

  if (galeria.innerHTML === "") {
    galeria.innerHTML = "<h3>No hay resultados</h3>";
  }
});
