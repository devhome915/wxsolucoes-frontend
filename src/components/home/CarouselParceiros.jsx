

const arquivos = import.meta.glob(
  "/src/assets/imagens/parceiros/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const imagens = Object.entries(arquivos)
  .sort(([nomeA], [nomeB]) => nomeA.localeCompare(nomeB))
  .map(([caminho, url]) => ({
    url,
    nome: caminho
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
  }));

export function CarouselParceiros() {
  if (imagens.length === 0) {
    return null;
  }

  return (
    <section
      className="parceiros"
      aria-label="Nossos parceiros"
    >
      <div className="parceiros-faixa">
        <div className="parceiros-grupo">
          {imagens.map((imagem) => (
            <div className="parceiros-item" key={imagem.url}>
              <img src={imagem.url} alt={imagem.nome} />
            </div>
          ))}
        </div>

       
        <div className="parceiros-grupo" aria-hidden="true">
          {imagens.map((imagem) => (
            <div className="parceiros-item" key={imagem.url}>
              <img src={imagem.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}