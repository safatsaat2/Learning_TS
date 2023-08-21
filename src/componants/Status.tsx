type StatusProps = {
    status: string
}
const Status = (props: StatusProps) => {
    let massage 
    if(props.status === "loading"){
        massage ="Loading....."
    }
    else if(props.status === "success"){
        massage ="Data  fetched successfully"
    }
    else if(props.status === "error"){
        massage = "BROKEN ERROR"
    }
    return (
        <div>
            <h1>{massage}</h1>
        </div>
    );
};

export default Status;