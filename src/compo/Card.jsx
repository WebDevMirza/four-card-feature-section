export default function Card(props) {
  return (
    <>
      <div className={props.border + " container box-shadow-3"}>
        <h2>{props.data?.title}</h2>
        <p>{props.data?.text}</p>
        <img src={props.data?.img} alt={props.data?.title + "'s photo"} />
      </div>
    </>
  );
}
