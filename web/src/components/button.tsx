interface IButton {
  title: string;
}

export function Button(props: IButton) {
  return <p>{props.title}</p>
}