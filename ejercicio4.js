const os=require('os');


console.log('memoria disponible: ' + os.freemem());

var vec=[];

for(let i=0; i<5000000; i++)
{
    vec.push(i);
}
console.log('Memoria disponible después de cargar vector: '+os.freemem());