
import Card from '../Components/Card.js'
export default function Education(){
    const education = [
        {name:"Brunel University" , grade:"First Class",
        overview:"Modules studied include computer algorithms, software engineering, human computer interaction, networking and the final year project."+
        " During this course I was able to cooperate and develop a project within a group envinronment, furthermore I was exposed to a range of different data structures "+
        "and algorithms which developed my problem solving skills.",
        image:"https://www.britishcouncil.or.th/sites/default/files/styles/bc-landscape-800x450/public/brunel_university_london.jpg?itok=9-eDUQGM",
        link:"https://www.brunel.ac.uk/"},
        {name:"Chobham Sixth Form" , grade:"Three C grades",
        overview:"Computer Science (C) Maths (C) Biology (C)",
        image:"https://pyramidbuildersltd.co.uk/wp-content/uploads/2019/07/8o7L8VUFmrc6-1024x768.jpg",
        link:"https://sixthform.harrischobham.org.uk/"},
        {name:"Kingsford Secondary School" , grade:"Twelve A-A* grades",
        overview:"Computer Science (A*) Maths (A) English Language (A) English Literature (A) Chemistry (A) Physics (A) Biology (A) Resistant Materials (A) "+
        "Geography (A) Mandarin (A) Philosophy And Ethics (B)",
        image:"https://www.formarchitecture.ltd.uk/wp-content/uploads/2018/02/Kingsford-School-Form_Artchitects-London__Essex-2-1024x683.jpg",
        link:"https://www.kingsfordschool.org.uk/"}
    ]


    const renderedCards = education.map((education)=>{
        return <Card key={education.id} item={education}/>;
    })

    return(
            <main className="grid" id="education">
                {renderedCards}
            </main>

    )
}