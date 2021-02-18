const List = ({ student }) => {
  return (
    <>
      {student.map((eleve) => {
        const { id, name, attendance, img } = eleve;
        return (
          <article className="student" key={id}>
            <div>
              <h4>{name}</h4>
              <p>{attendance ? "présent" : "Absent"}</p>
              <img className="pdp" src={img} alt="" srcset="" />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
