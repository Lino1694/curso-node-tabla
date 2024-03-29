const fs=require('fs');
const color=require('colors');

const crearArchivo =async(base =5, listar=false, hasta=10)=>{

    try{
 
        let salida,consola='';

    
        for(let i=1;i<=hasta;i++){
            salida +=`${base}x${i}=${base*i}\n`;
            consola +=`${base}${'x'.yellow}${i}=${base*i}\n`;
        }
        if (listar){
            console.clear();
            console.log(`Tabla del ${base}`.blue);
                
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return`tabla-${base}.txt`;
    }
    catch(err)
    {
        throw err;
    }
}

module.exports={
    crearArchivo
}
