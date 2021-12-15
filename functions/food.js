exports.handler = async(event, context) => {
    const food = [
        {
            title:"The Shining",
            author:"Kate Upton"
        },
        {
            title:"Yes, the man came",
            author:"Tina Prea"
        },
        {
            title:"Possible Impossible",
            author:"Liam Martin"
        }
    ]

    return{
        statusCode:200,
        body: JSON.stringify(food)
    }
}