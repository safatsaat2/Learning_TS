type GreetProps = {
    name: string
    messageCount: number
    isLoggedin: boolean
    
}
const Greet = (props: GreetProps) => {


    return (
        <div>
            {
                props.isLoggedin ? <h1>Welcome {props.name}, you have {props.messageCount} unread massages</h1> :
                `Welcome Guest`
            }
            
        </div>
    );
};

export default Greet;