type ChildrenPros ={
    children: string
}
const Heading = (props: ChildrenPros) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Heading;