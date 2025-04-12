const Loggforing = ({ navn, tekst, timer, dato }) => {
  const formatertDato = new Date(dato).toLocaleDateString("no-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="logg-item">
      <p>{formatertDato}</p>
      <p>{navn}</p>
      <p>{tekst}</p>
      <p>{timer} timer</p>
    </article>
  );
};

export default Loggforing;