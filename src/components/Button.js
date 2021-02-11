const Button = (props) => (
  <div>
    {console.log(props)}
    <button>
      <a href={props.link}>{props.name}</a>
    </button>
  </div>
)

export default Button
