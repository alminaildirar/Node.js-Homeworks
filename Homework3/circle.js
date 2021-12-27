function circleCircumference(radius){
    const result = 2*Math.PI*radius
    console.log(`Radius: ${radius}, Circumference of circle:${result}`)
}

function circleArea(radius){
    const result = radius*radius*Math.PI
    console.log(`Radius: ${radius}, Area of circle:${result}`)
}

module.exports = {circleCircumference, circleArea}