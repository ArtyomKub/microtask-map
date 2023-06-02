import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}

type StudentsPropsType = {
    id: number
    name: string
    age: number
}

const NewComponent = (props:NewComponentPropsType) => {
    return (
        <div>

        </div>
    );
};

export default NewComponent;