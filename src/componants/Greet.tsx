type GreetProps = {
    name: string
    messageCount?: number
    isLoggedin: boolean
    
}
const Greet = (props: GreetProps) => {

const {messageCount = 0} = props
    return (
        <div>
            {
                props.isLoggedin ? <h1>Welcome {props.name}, you have {messageCount} unread massages</h1> :
                `Welcome Guest`
            }
            
        </div>
    );
};

export default Greet;