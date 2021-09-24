// document.addEventListener('DOMContentLoaded', function() {

//     document.querySelector('#btn').addEventListener('click', function() {

//     })
// })
// https://d35aaqx5ub95lt.cloudfront.net/css/app-96fe7888.css

// document.body.style.backgroundColor = "red";
const html = document.querySelector("html")

var x = document.querySelectorAll("body");





// const site = document.querySelector("https://d35aaqx5ub95lt.cloudfront.net/css/app-96fe7888.css")

const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
    
   
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]),
      
        
      
        
    )
    var x = document.querySelectorAll("body");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red"
    }
   
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})