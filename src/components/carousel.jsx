const arquivos = import.meta.glob(
  "/src/assets/imagens/banner/*.{png,jpg,jpeg,webp,gif}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const imagens = Object.entries(arquivos)
  .sort(([nomeA], [nomeB]) => nomeA.localeCompare(nomeB))
  .map(([, url]) => url);

export function Carousel() {
  if (imagens.length === 0) {
    return <p>Nenhuma imagem encontrada na pasta banner.</p>;
  }

  return (
    <div
      id="demo"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {imagens.map((imagem, index) => (
          <button
            key={imagem}
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {imagens.map((imagem, index) => (
          <div
            key={imagem}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <img
              src={imagem}
              alt={`Banner ${index + 1}`}
              className="d-block w-100"
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}