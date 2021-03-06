//SOAL 1
const clothing = ["shirt","pants","jacket"]
const color = ["black","white"]
const size = ["S","M","L"]

const generateList = () =>{

    const mixed = {
        clothing : clothing,
        color : color,
        size : size
    }
    mix=[]

    const a = mixed.clothing.length - 1
    const b = mixed.color.length -1
    const c = mixed.size.length -1

    for(i=0; i<=a; i++){
        for(j=0; j<=b; j++){
            for(k=0; k<=c; k++){
                mix.push(mixed.clothing[i] +" "+ mixed.color[j] + " "+ mixed.size[k])
            }
        }
    }

    return mix
}

const list = generateList();
