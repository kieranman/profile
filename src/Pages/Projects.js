
import Card from '../Components/Card.js'
import GameTracker from "../Components/Images/GameTracker.PNG"
import MovieFinder from "../Components/Images/MovieFinder.PNG"
import PushupCounter from "../Components/Images/PushupCounter.PNG"
import FilmFlix from "../Components/Images/filmflix.PNG"
export default function Projects(){
    const education = [
        {name:"Game Tracker" , grade:"Java | Spring Boot | ReactJS | MySQL | HTML CSS",
        overview:"An application designed to recommend games through user-user based collaborative filtering."+
        " This is made possible by allowing users to compile a list of completed games and their rating of said game"+
        " ,using this information it is possible to find similiar users and the algorithm will attempt to recommend games based on how similar their lists are.",
        image:GameTracker,
        link:"https://github.com/kieranman/gametracker"},

        {name:"Movie Finder" ,grade: "ReactJS | HTML CSS",
        overview:"Utilises the TMDB Api to fetch movies and tv shows from their data set. My application aims to streamline the search for entertainment "+
        "and does so by minimising the number of clicks to find more about a movie.",
        image:MovieFinder,
        link:"https://kieranman.github.io/MovieFinder/"},

        {name:"FilmFlix DBMS" ,grade:"Python | Flask | JavaScript | HTML CSS",
        overview:"A web application that allows you to perform CRUD functionalities on a database, this is facillitated through an interactive menu design",
        image:FilmFlix,
        link:"https://kieranman.pythonanywhere.com/"},

        {name:"Pushup Counter" ,grade:"Python (MediaPipe)",
        overview:"Whilst the application is running it will retrieve the feed from your webcam and detect your skeletal features to determine whether a push up has been completed,"+
        " or in other words for every time your shoulder coordinates are less than or equal to your elbow coordinates.",
        image:PushupCounter,
        link:"https://github.com/kieranman/PushupCounter"},


    ]


    const renderedCards = education.map((education)=>{
        return <Card key={education.id} item={education}/>;
    })

    return(
            <main className="grid" id="projects">
                {renderedCards}
            </main>

    )
}