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
        <ul>
            {props.students.map((object) => {
                return (
                    <li key={object.id}>
                        <span>Name: {object.name} - </span>
                        <span>Age: {object.age}</span>
                    </li>
                )
            })}
        </ul>

    );
};

export default NewComponent;