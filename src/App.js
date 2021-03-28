import './sass/main.scss';
import OutlinedCard from './Fetch';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import html2canvas from 'html2canvas';

function record() {
    var x = document.getElementById("record");
    x.disabled = true;
    var v = document.getElementById("id");
    alert(v.style.display);
    if (v.style.color === "#F74A1E") {
        v.style.color = " #536E7C";
    } else {
        v.style.color = "#D77495";
    }

}

function takeshot() {
    let div = document.getElementById('id');
    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function(canvas) {
            document
                .getElementById('output')
                .appendChild(canvas);
        })
}


function App() {

    let card = OutlinedCard();


    return ( <
        div className = "image" > <
        section className = " features" >
        <
        div className = "feature__grid" >
        <
        /
        div >

        <
        /
        section >
        <
        code className = "banner"
        id = "react1" >
        Frontend Developer Intern Challenge < /
        code > < p > < /p> <
        button className = "newpage"
        onClick = {
            () => {

                var v = document.getElementById("id");
                //alert(v.style.display);
                if (v.style.display === "block") {
                    v.style.display = "none";
                } else {
                    v.style.display = "block";
                }
            }
        } > click here <
        /button> <br / > < br / > { card } <
        Loader id = "load"
        type = "Circles"
        color = "#00BFFF"
        height = { 80 }
        width = { 80 }
        / >  < /
        div >
    );
}

export default App;