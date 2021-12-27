
const arg = process.argv.slice(2)

function daireAlani(yaricap){
    let alan = yaricap*yaricap* Math.PI;
    console.log(`Yaricapi ${yaricap} olan dairenin alani: ${alan}`)
}

daireAlani(arg[0]*1)


