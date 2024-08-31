import {useState} from 'react';
import Select from "react-select";
import {showTypes, theatres} from "./seenOnBway";

function AddAShow() {
    const [newShow, addNewShow] = useState({
        id: 0,
        show: "",
        showType: "",
        theatre: "",
        seenOn: "",
        stars: 0,
    });

    const handleNumber = (e) => {
       addNewShow({...newShow, id: e.target.value})
    };

    const handleName = (e) => {
        addNewShow({...newShow, show: e.target.value})
     };

     const handleType = (e) => {
        addNewShow({...newShow, showType: e.value})
     };

     const handleTheatre = (e) => {
        addNewShow({...newShow, theatre: e.value})
     };

     const handleDate = (e) => {
        addNewShow({...newShow, seenOn: e.target.value})
     };

     const handleStars = (e) => {
        addNewShow({...newShow, stars: e.target.value})
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        //ListShows(newShow);
        console.log(newShow);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="NumberField">
            <label>Show Number:<br />
            <input
                type="number"
                name= "id"
                value={newShow.id}
                onChange={handleNumber}
                placeholder="1" />
            </label>
        </div>
        <div className="TextField">
            <label>Show Name:<br />
            <input
                type="text"
                name="show"
                value={newShow.show}
                onChange={handleName}
                placeholder="enter show name" />
            </label>
        </div>
        <div className="SelectField">
            <label>Show Type:<br />
            <Select
               source="showType"
               options={showTypes}
               onChange={handleType}
               defaultValue={showTypes[0]} />
            </label>
        </div>
        <div className="SelectField">
            <label>Theatre:<br />
            <Select
                name="theatre"
                options={theatres}
                onChange={handleTheatre}
                defaultValue={theatres[0]} />
            </label>
        </div>
        <div className="DateField">
            <label>Date Seen:<br />
            <input
                type="datetime-local"
                format={"MM-DD-YYYY | hh:mm a"}
                name="seenOn"
                value={newShow.seenOn}
                onChange={handleDate}/>
            </label>
        </div>
        <div className="RatingField">
            <label>Rating:<br />
            <input
                type="range"
                name="stars"
                max="5"
                value={newShow.stars}
                onChange={handleStars} />
            </label>
        </div>
        <button type="submit" value="submit">Submit</button>
    </form>
    );
};
export default AddAShow;
