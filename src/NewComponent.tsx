import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    age: number
    name: string
}

const NewComponent = (props: NewComponentType) => {
    return (
        console.log(props.students)
    );
};

export default NewComponent;