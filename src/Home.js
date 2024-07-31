import ListShows from "./listShows";
import { seenOnBway } from "./seenOnBway";

function MyShows() {
    return (
        <div className="App">
            <h2>Vickie's Play Passport (in chronological order)</h2>
            <h2>Click <a href="/add-a-show">HERE</a> to make your own list!</h2>
            <div class="flex-container">
            <ListShows data={seenOnBway} />
            </div>
        </div>
    )
};
export default MyShows;