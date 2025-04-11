const Loggforing = ({ navn, tekst, timer, dato }) => {

  const formatertDato = dato
  ? new Date(dato).toISOString().split("T")[0]
  : "Ukjent dato";

    return (
      <article className="logg-item">
        <p>{`${formatertDato}`}</p>
        <p>{`${navn}`}</p>
        <p>{`${tekst}`}</p>
        <p>{`${timer} timer`}</p>
      </article>
    );
  };
  
  export default Loggforing;