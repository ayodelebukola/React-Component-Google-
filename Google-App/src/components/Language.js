export default function Language(props){
    const url = `https://www.google.com/search?q=${props.name}`;
    return (
        <a href={url}>{props.name}</a>
    )
}