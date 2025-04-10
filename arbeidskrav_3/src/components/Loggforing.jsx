const Loggforing = ({ navn, tekst, timer, dato }) => {
    const formatertDato = new Date(dato).toISOString().split("T")[0];
    return (
      <article className="logg-item">
        <p>{`${formatertDato}, ${navn}, ${tekst}, ${timer} timer`}</p>
      </article>
    );
  };
  
  export default Loggforing;