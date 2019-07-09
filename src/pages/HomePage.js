import React from "react";
import Article from "../components/Article";

const articles = [
{
    id: 1,
    title: "Czym jest teoria strum?",
    author: "Jan Nowak",
    text: "Powyższy wpis to tylko niezbędne minimum, które trzeba znać aby zacząć pracować z biblioteką react-router. Jeśli chciałbyś dogłębnie i od podstaw poznać tę bibliotekę to specjalnie dla Ciebie przygotowałem specjalne kursy on-line, dzięki którym od podstaw nauczysz się react-routera, ale też Reacta oraz Reduxa! Kliknij czerwony guzik w “boksie” poniżej aby dowiedzieć się więcej"
},
{
    id: 2,
    title: "Co to komputer",
    author: "Urszula Zych",
    text: "Powyższy wpis to tylko niezbędne minimum, które trzeba znać aby zacząć pracować z biblioteką react-router. Jeśli chciałbyś dogłębnie i od podstaw poznać tę bibliotekę to specjalnie dla Ciebie przygotowałem specjalne kursy on-line, dzięki którym od podstaw nauczysz się react-routera, ale też Reacta oraz Reduxa! Kliknij czerwony guzik w “boksie” poniżej aby dowiedzieć się więcej"
},
{
    id: 3,
    title: "Gdzie jest Nemo?",
    author: "Adam Smitch",
    text: "Powyższy wpis to tylko niezbędne minimum, które trzeba znać aby zacząć pracować z biblioteką react-router. Jeśli chciałbyś dogłębnie i od podstaw poznać tę bibliotekę to specjalnie dla Ciebie przygotowałem specjalne kursy on-line, dzięki którym od podstaw nauczysz się react-routera, ale też Reacta oraz Reduxa! Kliknij czerwony guzik w “boksie” poniżej aby dowiedzieć się więcej"
},
]




const HomePage = () => {

const artList = articles.map(article => (
    <Article key={article.id} {...article} />
    //{...article} przekazana tablica z danymi
))

return(
    <>
    <div className="home">
        {artList}
    </div>
    </>
);




}

export default HomePage;