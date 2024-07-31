function ListShows(props) {
    const showList = props.data.map((seenOnBway) => {
        return (
            <li>
            <div className="flex-item">
            <b>Show #{seenOnBway.id}: "{seenOnBway.show}"</b><br />
            <ul><li>Show Type: {seenOnBway.showType}</li>
            <li>Theatre: {seenOnBway.theatre}</li>
            <li>Date Seen: {seenOnBway.seenOn}</li>
            <li>Rating: {seenOnBway.stars}/5 stars</li>
            </ul></div></li>
        );
    });
    return <ul>{showList}</ul>;
}
export default ListShows;