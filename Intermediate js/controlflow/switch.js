let name="jimin"
switch(name){
    case "peter":
        console.log("true");
        break;
    case "henry":
        console.log("true");
        break;
    case "Josh":
        console.log("true");
        break;
    case "jimin":
        console.log("yes");
        break;
    default:
        console.log("not matched");
        break;
}

function verify(city,country){
    switch (country) {
        case "Pakistan":
            switch (city) {
                case "Karachi":
                    console.log("country is pak and city is karachi");
                    break;
                case "Lahore":
                    console.log("country is pak and city is LAHORE");
                    break;
            }
            break;
    
        case "USA":
            switch (city) {
                case "NYC":
                    console.log("country is USA and city is NYC");
                    break;
                case "LA":
                    console.log("country is USA and city is LA");
                    break;
            }
            break;
        case "KOREA":
            switch (city) {
                case "SEOUL":
                    console.log("country is USA and city is SEOUL");
                    break;
                case "BUSAN":
                    console.log("country is USA and city is BUSAN");
                    break;
            }
            break;
        default:
            console.log("no country city matched");
            break;
    }

}



    