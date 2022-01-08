exports.handler = async(event, context) => {
    const data = [
        {
            cuisine:"Meat Ball Special",
            chef:"Kate Upton"
        },
        {
            cuisine:"Pasta Blanc",
            chef:"Tina Prea"
        },
        {
            cuisine:"Pizarelli",
            chef:"Liam Martin"
        }
    ]

    if(context.clientContext.user){
        return{
            statusCode:200,
            body: JSON.stringify(data)
        }
    }

    return{
        statusCode: 401,
        body: JSON.stringify({msg:"You have to log in first"})

    }

    
}