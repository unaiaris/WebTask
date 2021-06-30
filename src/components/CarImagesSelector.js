import React,{useEffect} from "react";
import CarImage from "./CarImage";

const CarImagesSelector = ({imgs,setSelectedImage}) => {
    var imagenes = []
    useEffect(() => {
        if (imgs != null) {
            
            Object.entries(imgs).map((item) => {
                imagenes.push(item[1]);
            });
        }
        console.log("imGaS "+imagenes[0].url)
        
    }, [])
    return (
        imgs.map((item)=>{
            return(
            <CarImage setSelectedImage={setSelectedImage} key={item.id} img={item}/>
            )
        })
);
};

export default CarImagesSelector;