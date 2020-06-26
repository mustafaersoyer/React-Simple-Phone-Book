import * as React from "react";
import {Filter, Create, Edit,SimpleForm, TextInput,  Datagrid, TextField,  List } from 'react-admin';

export const CustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="gender"/>
        </SimpleForm>
    </Create>
);

const CustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Ara" source="q" alwaysOn />
    </Filter>
);



export const CustomerList = props => (
<List filters={<CustomerFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
-           <TextField source="lastName" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);

export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="gender"/>
        </SimpleForm>
    </Edit>
);
