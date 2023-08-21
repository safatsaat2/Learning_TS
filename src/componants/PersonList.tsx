type PersonListProps = {
    names : {
        first: string
        last: string
    }[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <>
          {
            props.names.map(name => <h2 key={name.last}>{name.first} {name.last}</h2>)
          }  
        </>
    );
};

export default PersonList;