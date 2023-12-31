type PersonType = {
name: {
    first : string
    last : string
}
}
const Person = (props: PersonType) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    );
};

export default Person;