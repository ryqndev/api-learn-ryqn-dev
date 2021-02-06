let darkTheme = JSON.parse(localStorage.getItem('theme')) ?? false;
// we also use JSON.parse(...) because localStorage always saves values as a string
// but we need to parse the string for the actual boolean variable 

function toggleThemeAndSave(){
    if(darkTheme){
        document.documentElement.style.setProperty('--background', "white");
        document.documentElement.style.setProperty('--card-background', "white");
        document.documentElement.style.setProperty('--text-color', "black");
    }else{
        document.documentElement.style.setProperty('--background', "#151515");
        document.documentElement.style.setProperty('--card-background', "#15171A");
        document.documentElement.style.setProperty('--text-color', "white");
    }
    // finally, don't forget to change our darkTheme variable to reflect the new 
    // styles we just added and save it to our localstorage
    darkTheme = !darkTheme;
    localStorage.setItem('theme', darkTheme);
}